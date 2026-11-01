import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true'
  })
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const [logoutCallback, setLogoutCallback] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated)
  }, [isAuthenticated])

  // Prevent back button navigation when authenticated
  useEffect(() => {
    if (isAuthenticated && location.pathname === '/login') {
      navigate('/dashboard', { replace: true })
    }
  }, [isAuthenticated, location, navigate])

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
  }

  const logout = (callback) => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
    if (callback) callback()
    navigate('/login', { replace: true })
  }

  const requestLogout = (callback) => {
    setLogoutCallback(() => callback)
    setShowLogoutConfirm(true)
  }

  const confirmLogout = () => {
    setShowLogoutConfirm(false)
    logout(logoutCallback)
    setLogoutCallback(null)
  }

  const cancelLogout = () => {
    setShowLogoutConfirm(false)
    setLogoutCallback(null)
  }

  const value = {
    isAuthenticated,
    login,
    logout,
    requestLogout,
    showLogoutConfirm,
    confirmLogout,
    cancelLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

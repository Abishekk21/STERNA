import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, requestLogout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Handle browser back/forward button
    const handlePopState = (event) => {
      if (isAuthenticated && location.pathname === '/login') {
        event.preventDefault()
        requestLogout(() => {
          // Callback executed after logout confirmation
        })
        navigate(location.pathname, { replace: true })
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isAuthenticated, location, navigate, requestLogout])

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute

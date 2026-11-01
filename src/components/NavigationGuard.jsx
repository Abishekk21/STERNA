import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NavigationGuard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, requestLogout } = useAuth()

  useEffect(() => {
    // Intercept navigation to login page when authenticated
    if (isAuthenticated && location.pathname === '/login') {
      requestLogout(() => {
        navigate('/login', { replace: true })
      })
    }

    // Redirect root to dashboard if authenticated
    if (isAuthenticated && location.pathname === '/') {
      navigate('/dashboard', { replace: true })
    }

    // Redirect to dashboard if not authenticated and trying to access protected route
    if (!isAuthenticated && location.pathname !== '/login') {
      navigate('/login', { replace: true })
    }
  }, [location, isAuthenticated, navigate, requestLogout])

  return null
}

export default NavigationGuard

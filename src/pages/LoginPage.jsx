import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      return 'Enter email address'
    }
    if (!emailRegex.test(email)) {
      return 'Enter valid email address'
    }
    return ''
  }

  const validatePassword = (password) => {
    if (!password) {
      return 'Enter password'
    }
    if (password.length < 8) {
      return 'Password should contain a minimum of 8 characters'
    }
    return ''
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)
    
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError
      })
      return
    }
    
    // Login and navigate to dashboard
    login()
    navigate('/dashboard')
  }

  const handleOTPLogin = () => {
    alert('OTP login is not implemented in this frontend-only demo')
  }

  const handleForgotPassword = () => {
    alert('Password reset is not implemented in this frontend-only demo')
  }

  return (
    <div className="login-page">
      <div className="login-card card">
        <div className="login-brand">
          <span className="login-brand-sterna">STERNA</span>
          <span className="login-brand-selyek">SELYEK</span>
        </div>

        <h2 className="login-title">Login to account</h2>
        <p className="login-subtitle">Enter your email & password/OTP to login</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password <span className="required">*</span>
            </label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? 'input-error' : ''}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <div className="forgot-password">
            <button type="button" className="link-button" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn-primary login-button">
            Login using Password
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="btn-secondary login-button" onClick={handleOTPLogin}>
            Login using OTP
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

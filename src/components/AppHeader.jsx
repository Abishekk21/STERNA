import React from 'react'
import { useAuth } from '../context/AuthContext'
import './AppHeader.css'

const AppHeader = ({ title, showUserInfo = true }) => {
  const { requestLogout } = useAuth()

  const formatDateTime = () => {
    const date = new Date()
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'long', 
      year: 'numeric' 
    }) + ', ' + date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const handleLogout = () => {
    requestLogout()
  }

  return (
    <header className="app-header">
      <h1 className="header-title">{title}</h1>
      <div className="header-right">
        {showUserInfo && (
          <div className="header-user-info">
            <div className="user-greeting">Good morning, <strong>Leo</strong></div>
            <div className="user-datetime">{formatDateTime()}</div>
          </div>
        )}
        <button className="logout-btn" onClick={handleLogout} title="Logout">
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </header>
  )
}

export default AppHeader

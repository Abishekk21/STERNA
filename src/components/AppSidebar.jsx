import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './AppSidebar.css'

const AppSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'fa-chart-line' },
    { id: 'locations', label: 'Locations', path: '/locations', icon: 'fa-map-marker-alt' },
    { id: 'access', label: 'Access', path: '/access', icon: 'fa-key' },
    { id: 'trips', label: 'Trips', path: '/trips', icon: 'fa-route' },
    { id: 'gateways', label: 'Gateways', path: '/gateways', icon: 'fa-network-wired' },
    { id: 'vehicles', label: 'Vehicles', path: '/vehicles', icon: 'fa-car' },
    { id: 'users', label: 'Users', path: '/users', icon: 'fa-users' },
    { id: 'keys', label: 'Keys', path: '/keys', icon: 'fa-lock' },
    { id: 'levels', label: 'Levels', path: '/levels', icon: 'fa-signal' },
    { id: 'settings', label: 'Settings', path: '/settings', icon: 'fa-building' },
  ]

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path)
    }
  }

  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">
          <span className="brand-selyek">SELYEK</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => handleNavClick(item)}
            style={{ cursor: item.path ? 'pointer' : 'default' }}
          >
            <i className={`nav-icon fas ${item.icon}`}></i>
            <div className="nav-label">{item.label}</div>
          </div>
        ))}
      </nav>

      <div className="sidebar-profile">
        <div className="profile-avatar">L</div>
      </div>
    </aside>
  )
}

export default AppSidebar

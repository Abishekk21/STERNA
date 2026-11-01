import React from 'react'
import './AppFooter.css'

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-status">
        <span className="status-indicator"></span>
        <span>Network Status: <strong>Online</strong></span>
      </div>
      <div className="footer-copyright">
        Copyright © 2025 Sterna Security Devices Private Limited. All rights reserved.
      </div>
      <div className="footer-version">
        Version: 2.0.2
      </div>
    </footer>
  )
}

export default AppFooter

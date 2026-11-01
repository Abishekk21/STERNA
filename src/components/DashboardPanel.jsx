import React from 'react'
import './DashboardPanel.css'

const DashboardPanel = ({ title, emptyMessage }) => {
  return (
    <div className="dashboard-panel card">
      <div className="panel-header">{title}</div>
      <div className="panel-divider"></div>
      <div className="panel-content">
        <div className="panel-empty">{emptyMessage}</div>
      </div>
    </div>
  )
}

export default DashboardPanel

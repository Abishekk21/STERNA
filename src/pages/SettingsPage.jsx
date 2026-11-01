import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import './DashboardPage.css'
import './SettingsPage.css'

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Settings" showUserInfo={false} />
        
        <div className="dashboard-content">
          <div className="settings-container">
            <div className="settings-sidebar">
              <button 
                className={`settings-tab ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                <i className="fas fa-sliders-h"></i> General Settings
              </button>
              <button 
                className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                <i className="fas fa-lock"></i> Security
              </button>
              <button 
                className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                <i className="fas fa-bell"></i> Notifications
              </button>
              <button 
                className={`settings-tab ${activeTab === 'system' ? 'active' : ''}`}
                onClick={() => setActiveTab('system')}
              >
                <i className="fas fa-server"></i> System
              </button>
            </div>

            <div className="settings-content card">
              {activeTab === 'general' && (
                <div className="settings-section">
                  <h3>General Settings</h3>
                  <div className="settings-form">
                    <div className="form-row">
                      <label>Organization Name</label>
                      <input type="text" defaultValue="Sterna Security Devices Private Limited" />
                    </div>
                    <div className="form-row">
                      <label>Time Zone</label>
                      <select defaultValue="Asia/Kolkata">
                        <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                        <option value="America/New_York">America/New_York (EST)</option>
                        <option value="Europe/London">Europe/London (GMT)</option>
                      </select>
                    </div>
                    <div className="form-row">
                      <label>Language</label>
                      <select defaultValue="en">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="ta">Tamil</option>
                      </select>
                    </div>
                    <button className="btn-primary">Save Changes</button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="settings-section">
                  <h3>Security Settings</h3>
                  <div className="settings-form">
                    <div className="form-row">
                      <label>
                        <input type="checkbox" defaultChecked /> Enable Two-Factor Authentication
                      </label>
                    </div>
                    <div className="form-row">
                      <label>
                        <input type="checkbox" defaultChecked /> Require password change every 90 days
                      </label>
                    </div>
                    <div className="form-row">
                      <label>Session Timeout (minutes)</label>
                      <input type="number" defaultValue="30" min="5" max="120" />
                    </div>
                    <div className="form-row">
                      <label>
                        <input type="checkbox" defaultChecked /> Log all access attempts
                      </label>
                    </div>
                    <button className="btn-primary">Save Changes</button>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="settings-section">
                  <h3>Notification Settings</h3>
                  <div className="settings-form">
                    <div className="form-row">
                      <label>
                        <input type="checkbox" defaultChecked /> Email notifications for lock activities
                      </label>
                    </div>
                    <div className="form-row">
                      <label>
                        <input type="checkbox" defaultChecked /> SMS alerts for unauthorized access
                      </label>
                    </div>
                    <div className="form-row">
                      <label>
                        <input type="checkbox" /> Push notifications
                      </label>
                    </div>
                    <div className="form-row">
                      <label>
                        <input type="checkbox" defaultChecked /> Weekly activity reports
                      </label>
                    </div>
                    <button className="btn-primary">Save Changes</button>
                  </div>
                </div>
              )}

              {activeTab === 'system' && (
                <div className="settings-section">
                  <h3>System Information</h3>
                  <div className="settings-form">
                    <div className="info-row">
                      <label>System Version</label>
                      <span>2.0.2</span>
                    </div>
                    <div className="info-row">
                      <label>Last Updated</label>
                      <span>February 20, 2024</span>
                    </div>
                    <div className="info-row">
                      <label>Database Status</label>
                      <span className="status-badge online">Connected</span>
                    </div>
                    <div className="info-row">
                      <label>Server Uptime</label>
                      <span>15 days, 7 hours</span>
                    </div>
                    <button className="btn-secondary">Check for Updates</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  )
}

export default SettingsPage

import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import './DashboardPage.css'

const GatewaysPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, gatewayId: 'GW-001', name: 'Main Gateway', ipAddress: '192.168.1.100', macAddress: '00:1A:2B:3C:4D:5E', firmwareVersion: 'v2.1.5', status: 'Online', lastSeen: '2 mins ago' },
    { id: 2, gatewayId: 'GW-002', name: 'Parking Gateway', ipAddress: '192.168.1.101', macAddress: '00:1A:2B:3C:4D:5F', firmwareVersion: 'v2.1.5', status: 'Online', lastSeen: '5 mins ago' },
    { id: 3, gatewayId: 'GW-003', name: 'Office Gateway', ipAddress: '192.168.1.102', macAddress: '00:1A:2B:3C:4D:60', firmwareVersion: 'v2.1.4', status: 'Offline', lastSeen: '2 hours ago' },
  ]

  const filteredData = dummyData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.gatewayId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Gateways" />
        
        <div className="dashboard-content">
          <div className="lock-mapping-section">
            <div className="lock-mapping-header">
              <h3 className="lock-mapping-title">Gateway Devices</h3>
              <div className="lock-mapping-actions">
                <button className="btn-primary add-lock-btn">
                  <i className="fas fa-plus"></i> Add Gateway
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="table-container">
              <table className="lock-mapping-table">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>GATEWAY ID</th>
                    <th>NAME</th>
                    <th>IP ADDRESS</th>
                    <th>MAC ADDRESS</th>
                    <th>FIRMWARE VERSION</th>
                    <th>STATUS</th>
                    <th>LAST SEEN</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.gatewayId}</td>
                      <td>{item.name}</td>
                      <td>{item.ipAddress}</td>
                      <td>{item.macAddress}</td>
                      <td>{item.firmwareVersion}</td>
                      <td>
                        <span className={`status-badge ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.lastSeen}</td>
                      <td>
                        <button className="action-btn" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="action-btn" title="Settings">
                          <i className="fas fa-cog"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="table-footer">
              <div className="dummy-data-label">
                <i className="fas fa-info-circle"></i>
                Dummy Data
              </div>
            </div>
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  )
}

export default GatewaysPage

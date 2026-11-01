import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import './DashboardPage.css'

const AccessPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, userName: 'Leo Johnson', userId: 'USR-001', lockName: 'Main Entrance', accessType: 'Permanent', grantedDate: '2024-01-15', expiryDate: '-', status: 'Active' },
    { id: 2, userName: 'Sarah Wilson', userId: 'USR-002', lockName: 'Parking Gate', accessType: 'Temporary', grantedDate: '2024-02-20', expiryDate: '2024-03-20', status: 'Active' },
    { id: 3, userName: 'Mike Davis', userId: 'USR-003', lockName: 'Office Door', accessType: 'Permanent', grantedDate: '2024-01-10', expiryDate: '-', status: 'Active' },
    { id: 4, userName: 'Emma Brown', userId: 'USR-004', lockName: 'Server Room', accessType: 'Temporary', grantedDate: '2024-02-15', expiryDate: '2024-02-28', status: 'Expired' },
  ]

  const filteredData = dummyData.filter(item =>
    item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lockName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Access Management" />
        
        <div className="dashboard-content">
          <div className="lock-mapping-section">
            <div className="lock-mapping-header">
              <h3 className="lock-mapping-title">Access Permissions</h3>
              <div className="lock-mapping-actions">
                <button className="btn-primary add-lock-btn">
                  <i className="fas fa-plus"></i> Grant Access
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
                    <th>USER NAME</th>
                    <th>USER ID</th>
                    <th>LOCK NAME</th>
                    <th>ACCESS TYPE</th>
                    <th>GRANTED DATE</th>
                    <th>EXPIRY DATE</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.userName}</td>
                      <td>{item.userId}</td>
                      <td>{item.lockName}</td>
                      <td>{item.accessType}</td>
                      <td>{item.grantedDate}</td>
                      <td>{item.expiryDate}</td>
                      <td>
                        <span className={`status-badge ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="action-btn" title="Revoke">
                          <i className="fas fa-times-circle"></i>
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

export default AccessPage

import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import './DashboardPage.css'

const KeysPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, keyId: 'KEY-001', keyType: 'Physical', assignedTo: 'Leo Johnson', lockName: 'Main Entrance', issuedDate: '2024-01-15', status: 'Active' },
    { id: 2, keyId: 'KEY-002', keyType: 'Digital', assignedTo: 'Sarah Wilson', lockName: 'Parking Gate', issuedDate: '2024-02-01', status: 'Active' },
    { id: 3, keyId: 'KEY-003', keyType: 'Physical', assignedTo: 'Mike Davis', lockName: 'Office Door', issuedDate: '2024-01-20', status: 'Active' },
    { id: 4, keyId: 'KEY-004', keyType: 'Digital', assignedTo: 'Emma Brown', lockName: 'Server Room', issuedDate: '2024-02-10', status: 'Expired' },
    { id: 5, keyId: 'KEY-005', keyType: 'Master', assignedTo: 'John Smith', lockName: 'All Doors', issuedDate: '2024-01-05', status: 'Active' },
  ]

  const filteredData = dummyData.filter(item =>
    item.keyId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lockName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Keys" />
        
        <div className="dashboard-content">
          <div className="lock-mapping-section">
            <div className="lock-mapping-header">
              <h3 className="lock-mapping-title">Key Management</h3>
              <div className="lock-mapping-actions">
                <button className="btn-primary add-lock-btn">
                  <i className="fas fa-plus"></i> Issue Key
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
                    <th>KEY ID</th>
                    <th>KEY TYPE</th>
                    <th>ASSIGNED TO</th>
                    <th>LOCK NAME</th>
                    <th>ISSUED DATE</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.keyId}</td>
                      <td>{item.keyType}</td>
                      <td>{item.assignedTo}</td>
                      <td>{item.lockName}</td>
                      <td>{item.issuedDate}</td>
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
                          <i className="fas fa-ban"></i>
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

export default KeysPage

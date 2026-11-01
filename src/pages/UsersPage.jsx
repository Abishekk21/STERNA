import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import './DashboardPage.css'

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, userId: 'USR-001', name: 'Leo Johnson', email: 'leo@sterna.com', role: 'Admin', phone: '+91 98765 43210', status: 'Active', lastLogin: '2024-02-25 09:15 AM' },
    { id: 2, userId: 'USR-002', name: 'Sarah Wilson', email: 'sarah@sterna.com', role: 'Manager', phone: '+91 98765 43211', status: 'Active', lastLogin: '2024-02-25 08:30 AM' },
    { id: 3, userId: 'USR-003', name: 'Mike Davis', email: 'mike@sterna.com', role: 'User', phone: '+91 98765 43212', status: 'Active', lastLogin: '2024-02-24 05:45 PM' },
    { id: 4, userId: 'USR-004', name: 'Emma Brown', email: 'emma@sterna.com', role: 'User', phone: '+91 98765 43213', status: 'Inactive', lastLogin: '2024-02-20 02:30 PM' },
    { id: 5, userId: 'USR-005', name: 'John Smith', email: 'john@sterna.com', role: 'Security', phone: '+91 98765 43214', status: 'Active', lastLogin: '2024-02-25 10:00 AM' },
    { id: 6, userId: 'USR-006', name: 'Alice Cooper', email: 'alice@sterna.com', role: 'User', phone: '+91 98765 43215', status: 'Active', lastLogin: '2024-02-25 07:20 AM' },
    { id: 7, userId: 'USR-007', name: 'Bob Martin', email: 'bob@sterna.com', role: 'Maintenance', phone: '+91 98765 43216', status: 'Active', lastLogin: '2024-02-24 11:15 PM' },
  ]

  const filteredData = dummyData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.userId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Users" />
        
        <div className="dashboard-content">
          <div className="lock-mapping-section">
            <div className="lock-mapping-header">
              <h3 className="lock-mapping-title">User Management</h3>
              <div className="lock-mapping-actions">
                <button className="btn-primary add-lock-btn">
                  <i className="fas fa-plus"></i> Add User
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
                    <th>USER ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th>PHONE</th>
                    <th>STATUS</th>
                    <th>LAST LOGIN</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.userId}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                      <td>{item.phone}</td>
                      <td>
                        <span className={`status-badge ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.lastLogin}</td>
                      <td>
                        <button className="action-btn" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="action-btn" title="Permissions">
                          <i className="fas fa-shield-alt"></i>
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

export default UsersPage

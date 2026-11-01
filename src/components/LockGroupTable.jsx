import React, { useState } from 'react'
import './LockMappingTable.css'

const LockGroupTable = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, groupName: 'Main Entrance', lockCount: 5, description: 'Primary access points', createdBy: 'Admin', createdDate: '2024-01-15' },
    { id: 2, groupName: 'Parking Area', lockCount: 8, description: 'Parking lot gates', createdBy: 'Manager', createdDate: '2024-01-20' },
    { id: 3, groupName: 'Office Doors', lockCount: 12, description: 'Internal office access', createdBy: 'Security', createdDate: '2024-02-01' },
  ]

  const filteredData = dummyData.filter(item =>
    item.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddLockGroup = () => {
    alert('Add lock group functionality')
  }

  return (
    <div className="lock-mapping-section">
      <div className="lock-mapping-header">
        <h3 className="lock-mapping-title">Lock Group</h3>
        <div className="lock-mapping-actions">
          <button className="btn-primary add-lock-btn" onClick={handleAddLockGroup}>
            <i className="fas fa-plus"></i> Lock Group
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
              <th>GROUP NAME</th>
              <th>LOCK COUNT</th>
              <th>DESCRIPTION</th>
              <th>CREATED BY</th>
              <th>CREATED DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.groupName}</td>
                  <td>{item.lockCount}</td>
                  <td>{item.description}</td>
                  <td>{item.createdBy}</td>
                  <td>{item.createdDate}</td>
                  <td>
                    <button className="action-btn" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="action-btn" title="Delete">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="empty-state">
                  No results found
                </td>
              </tr>
            )}
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
  )
}

export default LockGroupTable

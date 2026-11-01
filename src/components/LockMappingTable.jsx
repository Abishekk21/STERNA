import React, { useState } from 'react'
import './LockMappingTable.css'

const LockMappingTable = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleAddLockMapping = () => {
    alert('Add lock mapping feature is not implemented in this frontend-only demo')
  }

  return (
    <div className="lock-mapping-section">
      <div className="lock-mapping-header">
        <h3 className="lock-mapping-title">Lock Mapping</h3>
        <div className="lock-mapping-actions">
          <button className="btn-primary add-lock-btn" onClick={handleAddLockMapping}>
            <i className="fas fa-plus"></i> Lock Mapping
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
              <th>LOCK NAME</th>
              <th>ASSET MARKING</th>
              <th>LOCK TYPE</th>
              <th>BATTERY PERCENTAGE</th>
              <th>LAST COMMUNICATED DATE & TIME</th>
              <th>CREATED BY</th>
              <th>ACT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="empty-state">
                No results found
              </td>
            </tr>
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

export default LockMappingTable

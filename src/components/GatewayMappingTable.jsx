import React, { useState } from 'react'
import './LockMappingTable.css'

const GatewayMappingTable = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, gatewayId: 'GW-001', gatewayName: 'Main Gateway', ipAddress: '192.168.1.100', status: 'Online', lockCount: 15, lastSeen: '2 mins ago' },
    { id: 2, gatewayId: 'GW-002', gatewayName: 'Parking Gateway', ipAddress: '192.168.1.101', status: 'Online', lockCount: 8, lastSeen: '5 mins ago' },
    { id: 3, gatewayId: 'GW-003', gatewayName: 'Office Gateway', ipAddress: '192.168.1.102', status: 'Offline', lockCount: 12, lastSeen: '2 hours ago' },
  ]

  const filteredData = dummyData.filter(item =>
    item.gatewayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.gatewayId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddGateway = () => {
    alert('Add gateway mapping functionality')
  }

  return (
    <div className="lock-mapping-section">
      <div className="lock-mapping-header">
        <h3 className="lock-mapping-title">Gateway Mapping</h3>
        <div className="lock-mapping-actions">
          <button className="btn-primary add-lock-btn" onClick={handleAddGateway}>
            <i className="fas fa-plus"></i> Gateway Mapping
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
              <th>GATEWAY NAME</th>
              <th>IP ADDRESS</th>
              <th>STATUS</th>
              <th>LOCK COUNT</th>
              <th>LAST SEEN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.gatewayId}</td>
                  <td>{item.gatewayName}</td>
                  <td>{item.ipAddress}</td>
                  <td>
                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.lockCount}</td>
                  <td>{item.lastSeen}</td>
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
                <td colSpan="8" className="empty-state">
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

export default GatewayMappingTable

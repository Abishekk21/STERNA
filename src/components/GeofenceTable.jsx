import React, { useState } from 'react'
import './LockMappingTable.css'

const GeofenceTable = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, name: 'R S Puram Zone', latitude: '11.0168', longitude: '76.9558', radius: '500m', status: 'Active' },
    { id: 2, name: 'Parking Lot', latitude: '11.0175', longitude: '76.9565', radius: '200m', status: 'Active' },
    { id: 3, name: 'Restricted Area', latitude: '11.0160', longitude: '76.9540', radius: '300m', status: 'Inactive' },
  ]

  const filteredData = dummyData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddGeofence = () => {
    alert('Add geofence functionality')
  }

  return (
    <div className="lock-mapping-section">
      <div className="lock-mapping-header">
        <h3 className="lock-mapping-title">Geofence</h3>
        <div className="lock-mapping-actions">
          <button className="btn-primary add-lock-btn" onClick={handleAddGeofence}>
            <i className="fas fa-plus"></i> Geofence
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
              <th>GEOFENCE NAME</th>
              <th>LATITUDE</th>
              <th>LONGITUDE</th>
              <th>RADIUS</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.latitude}</td>
                  <td>{item.longitude}</td>
                  <td>{item.radius}</td>
                  <td>
                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
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

export default GeofenceTable

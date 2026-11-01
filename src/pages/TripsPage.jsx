import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import './DashboardPage.css'

const TripsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, vehicleNo: 'TN-01-AB-1234', driverName: 'John Doe', startTime: '2024-02-25 09:00 AM', endTime: '2024-02-25 05:30 PM', distance: '45 km', status: 'Completed' },
    { id: 2, vehicleNo: 'TN-01-CD-5678', driverName: 'Jane Smith', startTime: '2024-02-25 10:00 AM', endTime: '-', distance: '12 km', status: 'In Progress' },
    { id: 3, vehicleNo: 'TN-01-EF-9012', driverName: 'Bob Wilson', startTime: '2024-02-25 08:30 AM', endTime: '2024-02-25 02:15 PM', distance: '28 km', status: 'Completed' },
  ]

  const filteredData = dummyData.filter(item =>
    item.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.driverName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Trips" />
        
        <div className="dashboard-content">
          <div className="lock-mapping-section">
            <div className="lock-mapping-header">
              <h3 className="lock-mapping-title">Trip History</h3>
              <div className="lock-mapping-actions">
                <button className="btn-primary add-lock-btn">
                  <i className="fas fa-plus"></i> New Trip
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
                    <th>VEHICLE NO</th>
                    <th>DRIVER NAME</th>
                    <th>START TIME</th>
                    <th>END TIME</th>
                    <th>DISTANCE</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.vehicleNo}</td>
                      <td>{item.driverName}</td>
                      <td>{item.startTime}</td>
                      <td>{item.endTime}</td>
                      <td>{item.distance}</td>
                      <td>
                        <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn" title="View Details">
                          <i className="fas fa-eye"></i>
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

export default TripsPage

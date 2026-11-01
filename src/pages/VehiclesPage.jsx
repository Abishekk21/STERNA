import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import './DashboardPage.css'

const VehiclesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, vehicleNo: 'TN-01-AB-1234', make: 'Toyota', model: 'Innova', year: 2022, driverName: 'John Doe', status: 'Active' },
    { id: 2, vehicleNo: 'TN-01-CD-5678', make: 'Honda', model: 'City', year: 2023, driverName: 'Jane Smith', status: 'Active' },
    { id: 3, vehicleNo: 'TN-01-EF-9012', make: 'Maruti', model: 'Swift', year: 2021, driverName: 'Bob Wilson', status: 'Maintenance' },
    { id: 4, vehicleNo: 'TN-01-GH-3456', make: 'Hyundai', model: 'Creta', year: 2023, driverName: 'Alice Brown', status: 'Active' },
  ]

  const filteredData = dummyData.filter(item =>
    item.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.driverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.make.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Vehicles" />
        
        <div className="dashboard-content">
          <div className="lock-mapping-section">
            <div className="lock-mapping-header">
              <h3 className="lock-mapping-title">Vehicle Management</h3>
              <div className="lock-mapping-actions">
                <button className="btn-primary add-lock-btn">
                  <i className="fas fa-plus"></i> Add Vehicle
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
                    <th>MAKE</th>
                    <th>MODEL</th>
                    <th>YEAR</th>
                    <th>DRIVER NAME</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.vehicleNo}</td>
                      <td>{item.make}</td>
                      <td>{item.model}</td>
                      <td>{item.year}</td>
                      <td>{item.driverName}</td>
                      <td>
                        <span className={`status-badge ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="action-btn" title="View Details">
                          <i className="fas fa-info-circle"></i>
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

export default VehiclesPage

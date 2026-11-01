import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import './DashboardPage.css'

const LevelsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, levelId: 'LVL-001', levelName: 'Ground Floor', description: 'Ground level access', lockCount: 15, userCount: 25, priority: 'High' },
    { id: 2, levelId: 'LVL-002', levelName: 'First Floor', description: 'Office area', lockCount: 12, userCount: 30, priority: 'Medium' },
    { id: 3, levelId: 'LVL-003', levelName: 'Second Floor', description: 'Conference rooms', lockCount: 8, userCount: 15, priority: 'Medium' },
    { id: 4, levelId: 'LVL-004', levelName: 'Basement', description: 'Parking and storage', lockCount: 20, userCount: 50, priority: 'Low' },
    { id: 5, levelId: 'LVL-005', levelName: 'Rooftop', description: 'Restricted access', lockCount: 3, userCount: 5, priority: 'High' },
  ]

  const filteredData = dummyData.filter(item =>
    item.levelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Levels" />
        
        <div className="dashboard-content">
          <div className="lock-mapping-section">
            <div className="lock-mapping-header">
              <h3 className="lock-mapping-title">Access Levels</h3>
              <div className="lock-mapping-actions">
                <button className="btn-primary add-lock-btn">
                  <i className="fas fa-plus"></i> Add Level
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
                    <th>LEVEL ID</th>
                    <th>LEVEL NAME</th>
                    <th>DESCRIPTION</th>
                    <th>LOCK COUNT</th>
                    <th>USER COUNT</th>
                    <th>PRIORITY</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.levelId}</td>
                      <td>{item.levelName}</td>
                      <td>{item.description}</td>
                      <td>{item.lockCount}</td>
                      <td>{item.userCount}</td>
                      <td>{item.priority}</td>
                      <td>
                        <button className="action-btn" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="action-btn" title="Configure">
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

export default LevelsPage

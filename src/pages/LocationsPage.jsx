import React, { useState } from 'react'
import AppSidebar from '../components/AppSidebar'
import LocationSidebar from '../components/LocationSidebar'
import LockMappingTable from '../components/LockMappingTable'
import LockGroupTable from '../components/LockGroupTable'
import GeofenceTable from '../components/GeofenceTable'
import GatewayMappingTable from '../components/GatewayMappingTable'
import AppFooter from '../components/AppFooter'
import './LocationsPage.css'

const LocationsPage = () => {
  const [activeTab, setActiveTab] = useState('lock-mapping')

  const tabs = [
    { id: 'lock-mapping', label: 'Lock Mapping' },
    { id: 'lock-group', label: 'Lock Group' },
    { id: 'geofence', label: 'Geofence' },
    { id: 'gateway-mapping', label: 'Gateway Mapping' },
  ]

  return (
    <div className="locations-page">
      <AppSidebar />
      <LocationSidebar />
      
      <div className="location-main-content">
        <div className="location-workspace">
          <div className="workspace-header">
            <h1 className="workspace-title">R S Puram</h1>
          </div>

          <div className="workspace-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="workspace-content">
            {activeTab === 'lock-mapping' && <LockMappingTable />}
            {activeTab === 'lock-group' && <LockGroupTable />}
            {activeTab === 'geofence' && <GeofenceTable />}
            {activeTab === 'gateway-mapping' && <GatewayMappingTable />}
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  )
}

export default LocationsPage

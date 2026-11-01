import React, { useState } from 'react'
import './LocationSidebar.css'

const LocationSidebar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [locations] = useState([
    { id: 1, name: 'R S Puram', city: 'Coimbatore', initial: 'R' }
  ])

  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.city.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddLocation = () => {
    alert('Add location feature is not implemented in this frontend-only demo')
  }

  return (
    <div className="location-sidebar">
      <div className="location-header">
        <h2 className="location-title">Locations</h2>
        <button className="add-location-btn" onClick={handleAddLocation} aria-label="Add location">
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <div className="location-search">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="location-list">
        {filteredLocations.map((location) => (
          <div key={location.id} className="location-item active">
            <div className="location-avatar">{location.initial}</div>
            <div className="location-info">
              <div className="location-name">{location.name}</div>
              <div className="location-city">{location.city}</div>
            </div>
            <div className="location-indicator"></div>
          </div>
        ))}
        {filteredLocations.length === 0 && (
          <div className="location-empty">No locations found</div>
        )}
      </div>
    </div>
  )
}

export default LocationSidebar

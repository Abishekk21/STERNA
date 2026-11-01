import React from 'react'
import './SummaryCard.css'

const SummaryCard = ({ label, value, color }) => {
  return (
    <div className="summary-card" style={{ backgroundColor: color }}>
      <div className="summary-decoration"></div>
      <div className="summary-label">{label}</div>
      <div className="summary-value">{value}</div>
    </div>
  )
}

export default SummaryCard

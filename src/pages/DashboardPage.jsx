import React from 'react'
import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import SummaryCard from '../components/SummaryCard'
import DashboardPanel from '../components/DashboardPanel'
import './DashboardPage.css'

const DashboardPage = () => {
  const summaryData = [
    { label: 'TOTAL ASSETS', value: '0', color: '#20B8E8' },
    { label: 'TOTAL LOCATIONS', value: '1', color: '#20B486' },
    { label: 'TOTAL ACCESS', value: '0', color: '#F5A623' },
    { label: 'TOTAL USERS', value: '7', color: '#E74691' },
    { label: 'TOTAL LOCK GROUPS', value: '0', color: '#64748B' },
    { label: 'TOTAL USER GROUPS', value: '0', color: '#8954E8' },
  ]

  const panels = [
    { title: 'ASSETS IN STOCK', emptyMessage: 'No Assets' },
    { title: 'HIGHEST LOCK OPENINGS (LAST 7 DAYS)', emptyMessage: 'No data' },
    { title: 'LOCK STATUS COUNT', emptyMessage: 'No data' },
  ]

  return (
    <div className="dashboard-page">
      <AppSidebar />
      <div className="main-content">
        <AppHeader title="Dashboard" />
        
        <div className="dashboard-content">
          <div className="summary-cards">
            {summaryData.map((item, index) => (
              <SummaryCard
                key={index}
                label={item.label}
                value={item.value}
                color={item.color}
              />
            ))}
          </div>

          <div className="dashboard-panels">
            {panels.map((panel, index) => (
              <DashboardPanel
                key={index}
                title={panel.title}
                emptyMessage={panel.emptyMessage}
              />
            ))}
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  )
}

export default DashboardPage

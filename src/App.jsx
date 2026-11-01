import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import NavigationGuard from './components/NavigationGuard'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import LocationsPage from './pages/LocationsPage'
import AccessPage from './pages/AccessPage'
import TripsPage from './pages/TripsPage'
import GatewaysPage from './pages/GatewaysPage'
import VehiclesPage from './pages/VehiclesPage'
import UsersPage from './pages/UsersPage'
import KeysPage from './pages/KeysPage'
import LevelsPage from './pages/LevelsPage'
import SettingsPage from './pages/SettingsPage'
import LogoutConfirmModal from './components/LogoutConfirmModal'
import { useAuth } from './context/AuthContext'

function AppRoutes() {
  const { showLogoutConfirm, confirmLogout, cancelLogout } = useAuth()

  return (
    <>
      <NavigationGuard />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/locations" element={<ProtectedRoute><LocationsPage /></ProtectedRoute>} />
        <Route path="/access" element={<ProtectedRoute><AccessPage /></ProtectedRoute>} />
        <Route path="/trips" element={<ProtectedRoute><TripsPage /></ProtectedRoute>} />
        <Route path="/gateways" element={<ProtectedRoute><GatewaysPage /></ProtectedRoute>} />
        <Route path="/vehicles" element={<ProtectedRoute><VehiclesPage /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UsersPage /></ProtectedRoute>} />
        <Route path="/keys" element={<ProtectedRoute><KeysPage /></ProtectedRoute>} />
        <Route path="/levels" element={<ProtectedRoute><LevelsPage /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      
      <LogoutConfirmModal 
        isOpen={showLogoutConfirm}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

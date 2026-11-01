import React from 'react'
import './LogoutConfirmModal.css'

const LogoutConfirmModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <i className="fas fa-exclamation-triangle modal-icon"></i>
          <h3>Confirm Logout</h3>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to logout?</p>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary modal-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-primary modal-btn" onClick={onConfirm}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirmModal

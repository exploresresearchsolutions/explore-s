import React from 'react';

const BankTransferModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Bank Transfer Details</h3>
                </div>
                <div className="modal-body">
                    <div className="bank-details">
                        <div className="detail-row">
                            <span className="detail-label">Bank Name:</span>
                            <span className="detail-value">IDFC FIRST Bank</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Account Number:</span>
                            <span className="detail-value">10245868940</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">IFSC Code:</span>
                            <span className="detail-value">IDFB0022462</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Account Holder:</span>
                            <span className="detail-value">Explore S solutions</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Company Customer ID:</span>
                            <span className="detail-value">6685722401</span>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="close-button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BankTransferModal;

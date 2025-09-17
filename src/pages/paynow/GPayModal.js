import React from 'react';

const GPayModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">G Pay UPI Scanner</h3>
                </div>
                <div className="modal-body" style={{ textAlign: 'center' }}>
                    <img
                        src="/scanner.jpg"
                        alt="G Pay UPI Scanner"
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
                    />
                    <div style={{ marginTop: 12, fontSize: 16 }}>
                        <div style={{ fontWeight: 600 }}>UPI ID</div>
                        <div style={{ fontFamily: 'monospace' }}>exploressolutions@idfcbank</div>
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

export default GPayModal;



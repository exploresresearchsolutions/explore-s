import React, { useState } from 'react';
import BankTransferModal from './BankTransferModal';
import GPayModal from './GPayModal';

const PaymentMethods = ({ selectedMethod, onMethodSelect }) => {
    const [showBankModal, setShowBankModal] = useState(false);
    const [showGPayModal, setShowGPayModal] = useState(false);
    
    const paymentMethods = [
        {
            id: 'debit-card',
            name: 'Debit Card',
            icon: '💳',
            description: 'Pay with your debit card'
        },
        {
            id: 'credit-card',
            name: 'Credit Card',
            icon: '💳',
            description: 'Pay with your credit card'
        },
        {
            id: 'bank-transfer',
            name: 'Internet Banking/ Bank Transfer',
            icon: '🏦',
            description: 'Transfer from your bank account'
        },
        {
            id: 'gpay-upi',
            name: 'G Pay UPI',
            icon: '📱',
            description: 'Quick UPI payment'
        }
    ];

    return (
        <section className="payment-methods-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-title">Choose Your Preferred Payment Method</h2>
                        <p className="section-description">
                            We offer multiple payment methods for your convenience:
                        </p>
                        
                        <div className="payment-methods-grid">
                            {paymentMethods.map((method) => (
                                <div 
                                    key={method.id}
                                    className={`payment-method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                                    onClick={() => {
                                        if (method.id === 'bank-transfer') {
                                            setShowBankModal(true);
                                        } else if (method.id === 'gpay-upi') {
                                            setShowGPayModal(true);
                                        } else {
                                            onMethodSelect(method.id);
                                        }
                                    }}
                                >
                                    <div className="method-icon">{method.icon}</div>
                                    <h3 className="method-name">{method.name}</h3>
                                    <p className="method-description">{method.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <BankTransferModal 
                isOpen={showBankModal}
                onClose={() => setShowBankModal(false)}
            />
            <GPayModal 
                isOpen={showGPayModal}
                onClose={() => setShowGPayModal(false)}
            />
        </section>
    );
};

export default PaymentMethods;

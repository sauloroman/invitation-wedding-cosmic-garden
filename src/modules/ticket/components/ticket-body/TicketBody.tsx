import React from 'react'

export const TicketBody: React.FC = () => {
    return (
        <div className="ticket__body">
            <div className="ticket__qr-container">
                <div className="ticket__qr-box">
                    <img src="https://res.cloudinary.com/dlamufioy/image/upload/v1721928481/abrasa/tickets/668ef7df71dd4f0b19328c41/hfaiszv4t8c2incaazeu.png" alt="Código QR del boleto" className="ticket__qr-image" />
                </div>
            </div>

            <div className="ticket__guest-info">
                <span className="ticket__guest-label">Boleto para:</span>
                <h3 className="ticket__guest-name">Familia Martínez Ruiz</h3>
            </div>

            <div className="ticket__passes-info">
                <div className="ticket__pass-card">
                    <span className="ticket__pass-count">02</span>
                    <span className="ticket__pass-label">Adultos</span>
                </div>
                <div className="ticket__pass-card">
                    <span className="ticket__pass-count">01</span>
                    <span className="ticket__pass-label">Niños</span>
                </div>
                <div className="ticket__pass-card ticket__pass-card--table">
                    <span className="ticket__pass-count">12</span>
                    <span className="ticket__pass-label">Mesa</span>
                </div>
            </div>
        </div>
    )
}

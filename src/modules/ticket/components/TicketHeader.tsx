import React from 'react'

export const TicketHeader: React.FC = () => {
    return (
        <header className="ticket__header">
            <div className="ticket__event-title">
                <span className="ticket__event-subtitle">Enlace Matrimonial</span>
                <h2 className="ticket__couple-names">
                    Mariana <span className="ticket__amp">&amp;</span> Ernesto
                </h2>
            </div>

            <div className="ticket__event-details">
                <div className="ticket__detail-item">
                    <i className="bx bx-calendar-event ticket__detail-icon" />
                    <div className="ticket__detail-text">
                        <span className="ticket__detail-label">Fecha</span>
                        <span className="ticket__detail-value">18 de Julio de 2026 &mdash; 09:00 P.M.</span>
                    </div>
                </div>

                <div className="ticket__detail-item">
                    <i className="bx bx-map ticket__detail-icon" />
                    <div className="ticket__detail-text">
                        <span className="ticket__detail-label">Recepción</span>
                        <span className="ticket__detail-value">Salón La Herradura</span>
                        <span className="ticket__detail-subvalue">Carretera SLP - Aguascalientes km 16, Pozo Blanco El Llano, Ags.</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

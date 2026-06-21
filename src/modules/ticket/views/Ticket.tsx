import React from 'react'
import { TicketHeader } from '../components/ticket-header/TicketHeader'
import { TicketBody } from '../components/ticket-body/TicketBody'
import { TicketFooter } from '../components/ticket-footer/TicketFooter'
import './_ticket.scss'

export const Ticket: React.FC = () => {

    return (
        <div className='ticket'>
            <div className="ticket__container">
                <div className="ticket__content">
                    <TicketHeader />

                    <div className="ticket__divider">
                        <div className="ticket__notch ticket__notch--left"></div>
                        <div className="ticket__dashed-line"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                    </div>

                    <TicketBody />

                    <div className="ticket__divider">
                        <div className="ticket__notch ticket__notch--left"></div>
                        <div className="ticket__dashed-line"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                    </div>

                    <TicketFooter />
                </div>
            </div>
        </div>
    )
}

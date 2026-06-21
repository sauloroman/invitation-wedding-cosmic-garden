import React from 'react'
import { TicketHeader } from '../components/TicketHeader'
import { TicketBody } from '../components/TicketBody'
import { TicketFooter } from '../components/TicketFooter'
import './_ticket.scss'
import bg from '@/assets/images/bg-ticket.jpeg'

export const Ticket: React.FC = () => {

    return (
        <div className='ticket'>
            <div className="ticket__background" style={{ backgroundImage: `url(${bg})` }}></div>
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

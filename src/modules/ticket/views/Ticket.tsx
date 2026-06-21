import React from 'react'
import './_ticket.scss'

export const Ticket: React.FC = () => {

    return (
        <div className='ticket'>
            <div className="ticket__container">
                <div className="ticket__content">
                    <div className="ticket__header">

                    </div>

                    <div className="ticket__divider">
                        <div className="ticket__notch ticket__notch--left"></div>
                        <div className="ticket__dashed-line"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                    </div>

                    <div className="ticket__body">

                    </div>

                    <div className="ticket__divider">
                        <div className="ticket__notch ticket__notch--left"></div>
                        <div className="ticket__dashed-line"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                    </div>

                    <div className="ticket__footer">

                    </div>
                </div>
            </div>
        </div>
    )
}

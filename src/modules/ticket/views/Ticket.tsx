import React from 'react'
import { useNavigation } from '@/common/hooks/useNavigate'
import './_ticket.scss'

export const Ticket: React.FC = () => {
    const { navigateTo } = useNavigation()

    return (
        <div className='ticket'>
            <button className="ticket__back-btn" onClick={() => navigateTo('/')}>
                <i className="bx bx-left-arrow-alt" />
                <span>Volver</span>
            </button>
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

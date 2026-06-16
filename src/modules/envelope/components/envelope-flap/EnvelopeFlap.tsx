import React from 'react'
import './_envelope-flap.scss'

export interface EnvelopeFlapProps {
    direction: 'top' | 'bottom' | 'left' | 'right';
    isOpening: boolean;
}

export const EnvelopeFlap: React.FC<EnvelopeFlapProps> = ({ direction, isOpening }) => {
    const openClass = isOpening ? `envelop__flap-wrapper--open-${direction}` : ''
    
    return (
        <div className={`envelop__flap-wrapper envelop__flap-wrapper--${direction} ${openClass}`}>
            <div className={`envelop__${direction}`}>
                <div className={`envelop__${direction}-inner`} />
            </div>
        </div>
    )
}

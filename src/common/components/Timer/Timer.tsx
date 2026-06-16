import React from 'react'
import { useCountdown } from '../../../hooks/useCountdown'
import { ScrollReveal } from '../ScrollReveal/ScrollReveal'

export const TimerBox: React.FC<{ number: string; concept: string; delay: number }> = ({ number, concept, delay }) => {
    return (
        <ScrollReveal direction="up" delay={delay} duration={3.0} distance={45} rotate={-2}>
            <div className="timer__box">
                <div className="timer__number">{number}</div>
                <div className="timer__concept">{concept}</div>
            </div>
        </ScrollReveal>
    )
}

interface TimerProps {
    targetDate: string
}

export const Timer: React.FC<TimerProps> = ({ targetDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate)

    const concepts = [
        { number: days, concept: 'Días', delay: 1.0 },
        { number: hours, concept: 'Hrs', delay: 1.4 },
        { number: minutes, concept: 'Min', delay: 1.8 },
        { number: seconds, concept: 'Seg', delay: 2.2 }
    ]

    return (
        <div className='timer relative-z-2'>
            {
                concepts.map(({ number, concept, delay }) => (
                    <TimerBox key={concept} number={String(number).padStart(2, '0')} concept={concept} delay={delay} />
                ))
            }
        </div>
    )
}


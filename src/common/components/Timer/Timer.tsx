import React from 'react'
import './_timer.scss'
import { useCountdown } from '@/common/hooks/useCountdown'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'

export const TimerBox: React.FC<{ number: string; concept: string; delay: number }> = ({ number, concept, delay }) => {
    return (
        <ScrollReveal direction="up" delay={delay} duration={1.0} distance={20} rotate={-1}>
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
        { number: days, concept: 'Días', delay: 0.2 },
        { number: hours, concept: 'Hrs', delay: 0.35 },
        { number: minutes, concept: 'Min', delay: 0.5 },
        { number: seconds, concept: 'Seg', delay: 0.65 }
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


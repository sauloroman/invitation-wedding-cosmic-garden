import React from 'react'
import './_countdown.scss'
import { Timer, SectionHeader, ScrollReveal } from '@/common/components'
import { getEnvVariables } from '@/common/helpers/get-env-variables';

const { VITE_INVITATION_DATE } = getEnvVariables()

export const Countdown: React.FC = () => {
    return (
        <section className='countdown'>
            <ScrollReveal direction="down" blur={12} scale={0.94} duration={3.0} delay={0.4}>
                <i className='bxf bx-clock countdown__icon'></i>
                <SectionHeader title='Cuenta Atrás' subtitle='Contámos los pétalos que quedan para el gran día.' />
            </ScrollReveal>

            <Timer targetDate={VITE_INVITATION_DATE} />

            <ScrollReveal direction="none" delay={2.8} duration={3.2} scale={0.95} rotate={1.5} blur={8}>
                <p className="countdown__message">¡El gran día está cerca. No te lo pierdas!</p>
            </ScrollReveal>
        </section>
    )
}

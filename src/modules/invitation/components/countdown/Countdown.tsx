import React from 'react'
import './_countdown.scss'
import { Timer, SectionHeader, ScrollReveal } from '@/common/components'
import { getEnvVariables } from '@/common/helpers/get-env-variables'
import bg from '@/assets/images/bg-countdown.jpeg'

const { VITE_INVITATION_DATE } = getEnvVariables()

export const Countdown: React.FC = () => {
    return (
        <section className='countdown'>
            <div className="countdown__bg" style={{ backgroundImage: `url(${bg})` }}></div>

            <ScrollReveal direction="down" distance={20} blur={3} scale={0.98} duration={1.0} delay={0.1}>
                <i className='bxf bx-clock countdown__icon'></i>
                <SectionHeader title='Cuenta Atrás' subtitle='Contámos los pétalos que quedan para el gran día.' />
            </ScrollReveal>

            <Timer targetDate={VITE_INVITATION_DATE} />

            <ScrollReveal direction="none" delay={0.3} duration={1.0} scale={0.98} rotate={0.5} blur={2}>
                <p className="countdown__message">
                    <span>¡El gran día está cerca!
                        No te lo pierdas.</span>
                </p>
            </ScrollReveal>
        </section>
    )
}

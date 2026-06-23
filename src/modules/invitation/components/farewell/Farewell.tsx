import React from 'react'
import './_farewell.scss'
import cake from '@/assets/images/pastel.jpeg'
import { ScrollReveal, ParticleRain } from '@/common/components'
import bg from '@/assets/images/bg-farewell.jpeg'

export const Farewell: React.FC = () => {
    return (
        <div className='farewell'>
            <div className="farewell__container">
                <ScrollReveal direction="up" distance={20} duration={1.2} delay={0.1} className="farewell__reveal">
                    <div className="farewell__image">
                        <img src={cake} alt="Cake" loading="lazy" />
                    </div>
                </ScrollReveal>

            </div>
            <ScrollReveal direction='none' duration={1.0} delay={0.25}>
                <div className="farewell-couple">
                    <div className="farewell-couple__bg" style={{ backgroundImage: `url(${bg})` }}></div>
                    <ParticleRain colors={['#C09080']} intervalMs={220} />

                    <div className="farewell-couple__content">
                        <h2 className='farewell-couple__names'>
                            <p>Mariana</p>
                            <p>&</p>
                            <p>Ernesto</p>
                        </h2>
                        <div className="farewell-couple__date">
                            &mdash; Sábado 18 Julio 2026 &mdash;
                        </div>
                    </div>

                    <ScrollReveal direction="up" distance={20} duration={1.2} delay={0.15} className="farewell-couple__phrase-reveal">
                        <div className="farewell-couple__promo">
                            ¿Quieres una invitación como esta? <a href="https://www.instagram.com/tuamigoinvitaciones/" target="_blank" rel="noopener noreferrer">TuAmigoInvitaciones</a>
                        </div>
                        <a className='farewell-couple__link' href="https://wa.me/524496548073" target="_blank" rel="noopener noreferrer">449 654 80 73</a>
                    </ScrollReveal>

                </div>
            </ScrollReveal>
        </div>
    )
}

import React from 'react'
import './_guest.scss'
import { Button, SectionHeader, ScrollReveal } from '@/common/components'
import { useNavigation } from '@/common/hooks/useNavigate'
import flowerbases from '@/assets/images/jarrones-flores.jpeg'

export const Guest: React.FC = () => {
    const { navigateTo } = useNavigation()

    return (
        <section className='guest'>
            <div className="guest__container">
                <div className="guest__content">
                    <ScrollReveal direction="down" distance={40} blur={8} duration={3.0} delay={0.4}>
                        <div className="guest__header">
                            <SectionHeader
                                title='Para tí'
                                subtitle='Confirma tu asistencia'
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={3.2} delay={1.0}>
                        <p className="guest__message">Tu presencia es muy importante para nosotros, por favor confirma tu asistencia antes del <span className='text-strong'>10 de julio</span></p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={3.2} delay={1.6}>
                        <div className="guest__guest">
                            <span className="guest__guest-label">Invitado Especial</span>
                            <p className="guest__guest-name">Nombre Invitado</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={3.2} delay={2.2}>
                        <div className='guest__button'>
                            <Button
                                action={() => navigateTo('/ticket')}
                                variant='primary'
                            >
                                Ver mis boletos
                            </Button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="none" scale={0.6} duration={3.5} delay={2.8}>
                        <div className="guest__icon">
                            <img src={flowerbases} alt="Jarrones de flores" loading="lazy" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

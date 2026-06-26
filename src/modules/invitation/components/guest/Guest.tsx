import React from 'react'
import './_guest.scss'
import { Button, SectionHeader, ScrollReveal } from '@/common/components'
import { useNavigation } from '@/common/hooks/useNavigate'
import { useTicket } from '@/modules/ticket/hooks/useTicket'
import { onGoToSite } from '@/common/helpers/navigate'

export const Guest: React.FC = () => {
    const { navigateTo } = useNavigation()
    const { ticket } = useTicket()

    return (
        <section className='guest'>
            <div className="guest__container">
                <div className="guest__content">
                    <ScrollReveal direction="down" distance={20} blur={3} duration={1.0} delay={0.1}>
                        <div className="guest__header">
                            <SectionHeader
                                title='Para tí'
                                subtitle='Confirma tu asistencia'
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={20} duration={1.0} delay={0.25}>
                        <p className="guest__message">Tu presencia es muy importante para nosotros, por favor confirma tu asistencia antes del <span className='text-strong'>10 de julio</span></p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={20} duration={1.0} delay={0.4}>
                        <div className="guest__guest">
                            <span className="guest__guest-label">Invitado Especial</span>
                            <p className="guest__guest-name">{ticket?.name}</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={20} duration={1.0} delay={0.55}>
                        <section className="guest__buttons">
                            <div className='guest__button'>
                                <Button
                                    action={() => navigateTo('/ticket')}
                                    variant='primary'
                                >
                                    Ver mis boletos
                                </Button>
                            </div>
                            <div className="guest__button">
                                <Button
                                    action={() => onGoToSite('https://forms.gle/UfAavGyh9uZDvCeF9')}
                                    variant='outline-secondary'
                                >
                                    <p className='color-secondary'>
                                        Confirmar asistencia
                                    </p>
                                </Button>
                            </div>
                        </section>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

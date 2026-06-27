import React from 'react'

import { SectionHeader, ScrollReveal } from '@/common/components'

import dressIcon from '@/assets/images/dress-icon.png'
import bdAdd from '@/assets/images/bg-add.jpeg'

import './_reminders.scss'

export const Reminders: React.FC = () => {
    return (
        <section className="reminders">
            <div className="reminders__bg" style={{ backgroundImage: `url(${bdAdd})` }}></div>
            <div className="reminders__container">
                <ScrollReveal direction="right" distance={30} rotate={-2} duration={1.2} delay={0.15}>
                    <div className="reminder">
                        <div className="reminder__header">
                            <SectionHeader
                                title='Dress Code'
                                subtitle='Formal'
                            />
                        </div>

                        <div className="reminder__container">
                            <div className="reminder__icon">
                                <img src={dressIcon} alt="Dress Code" className='reminder__icon-img' />
                            </div>
                            <div className="reminder__content">
                                <ul className='reminder__list'>
                                    <li className='reminder__item'>
                                        <h4>Hombres</h4>
                                        <p>Esmoquin o traje</p>
                                    </li>
                                    <li className='reminder__item'>
                                        <h4>Mujeres</h4>
                                        <p>Vestido de noche</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className='reminder__text'>El color blanco está reservado para la novia.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="left" distance={30} rotate={2} duration={1.2} delay={0.3}>
                    <div className="reminder">
                        <div className="reminder__header">
                            <SectionHeader
                                title='Atención'
                                subtitle='No niños'
                            />
                        </div>
                        <p className='reminder__text'>Agradecemos su comprensión al no traer niños adicionales a los ya contemplados en la invitación. <br />Disfrutemos de esta noche especial.</p>
                    </div>
                </ScrollReveal>
            </div>
            <div className="reminders__line"></div>
        </section>
    )
}

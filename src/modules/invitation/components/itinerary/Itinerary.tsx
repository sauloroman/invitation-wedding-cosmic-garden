import React from 'react'
import './_itinerary.scss'
import { SectionHeader, ScrollReveal } from '@/common/components'

import itinerary1 from '@/assets/images/itinerary-1.png'
import itinerary2 from '@/assets/images/itinerary-2.png'
import itinerary3 from '@/assets/images/itinerary-3.png'
import itinerary4 from '@/assets/images/itinerary-4.png'
import itinerary5 from '@/assets/images/itinerary-5.png'
import itinerary6 from '@/assets/images/itinerary-6.png'

export const Itinerary: React.FC = () => {
    return (
        <section className='itinerary'>
            <div className="itinerary__container">

                <div className='itinerary__header'>
                    <div className="itinerary__decoration">
                        <i className='bxf bx-star itinerary__decoration-icon' />
                        <i className='bxf bx-star itinerary__decoration-icon' />
                        <i className='bxf bx-star itinerary__decoration-icon' />
                    </div>

                    <ScrollReveal direction='up' distance={40} duration={1.5}>
                        <SectionHeader
                            title='Itinerario'
                            subtitle='Nuestro recorrido juntos'
                        />
                    </ScrollReveal>
                </div>

                <ul className="itinerary__list">
                    <li className='itinerary__item'>
                        <ScrollReveal direction='right' distance={50} duration={1.5} delay={1}>
                            <div className="itinerary__card">
                                <div className="itinerary__card-icon-container">
                                    <img src={itinerary1} alt="Itinerario 1" className='itinerary__card-icon' />
                                </div>
                                <div className="itinerary__card-content">
                                    <span className="itinerary__card-badge">07:00 P.M.</span>
                                    <p className="itinerary__card-description">Ceremonia Religiosa</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </li>
                    <li className='itinerary__item'>
                        <ScrollReveal direction='left' distance={50} duration={1.5} delay={1}>
                            <div className="itinerary__card">
                                <div className="itinerary__card-icon-container">
                                    <img src={itinerary2} alt="Itinerario 2" className='itinerary__card-icon' />
                                </div>
                                <div className="itinerary__card-content">
                                    <span className="itinerary__card-badge">09:00 P.M.</span>
                                    <p className="itinerary__card-description">Recepción</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </li>
                    <li className='itinerary__item'>
                        <ScrollReveal direction='right' distance={50} duration={1.5} delay={1}>
                            <div className="itinerary__card">
                                <div className="itinerary__card-icon-container">
                                    <img src={itinerary3} alt="Itinerario 3" className='itinerary__card-icon' />
                                </div>
                                <div className="itinerary__card-content">
                                    <span className="itinerary__card-badge">10:30 P.M.</span>
                                    <p className="itinerary__card-description">Cena</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </li>
                    <li className='itinerary__item'>
                        <ScrollReveal direction='left' distance={50} duration={1.5} delay={1}>
                            <div className="itinerary__card">
                                <div className="itinerary__card-icon-container">
                                    <img src={itinerary4} alt="Itinerario 4" className='itinerary__card-icon' />
                                </div>
                                <div className="itinerary__card-content">
                                    <span className="itinerary__card-badge">11:30 P.M.</span>
                                    <p className="itinerary__card-description">Brindis</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </li>
                    <li className='itinerary__item'>
                        <ScrollReveal direction='right' distance={50} duration={1.5} delay={1}>
                            <div className="itinerary__card">
                                <div className="itinerary__card-icon-container">
                                    <img src={itinerary5} alt="Itinerario 5" className='itinerary__card-icon' />
                                </div>
                                <div className="itinerary__card-content">
                                    <span className="itinerary__card-badge">11:45 A.M.</span>
                                    <p className="itinerary__card-description">Fiesta</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </li>
                    <li className='itinerary__item'>
                        <ScrollReveal direction='left' distance={50} duration={1.5} delay={1}>
                            <div className="itinerary__card">
                                <div className="itinerary__card-icon-container">
                                    <img src={itinerary6} alt="Itinerario 6" className='itinerary__card-icon' />
                                </div>
                                <div className="itinerary__card-content">
                                    <span className="itinerary__card-badge">03:00 A.M.</span>
                                    <p className="itinerary__card-description">Fin de la fiesta</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </li>
                </ul>

            </div>
        </section>
    )
}


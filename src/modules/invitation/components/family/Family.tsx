import React, { useState } from 'react'
import './_family.scss'
import { SectionHeader, ScrollReveal } from '@/common/components'
import iniciales from '@/assets/images/iniciales.jpeg'
import bg from '@/assets/images/bg-family.png'

export const Family: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(prev => !prev)
    }

    return (
        <section className='family'>
            <div className='family__bg' style={{ backgroundImage: `url(${bg})` }} />

            <div className={`family__card-wrapper ${isFlipped ? 'family__card-wrapper--flipped' : ''}`}>
                <div className="family__card-inner">

                    <div className="family__card-front family__container">
                        <div className="family__content">
                            <ScrollReveal direction="down" distance={20} blur={3} duration={1.0} delay={0.1}>
                                <SectionHeader
                                    title='Familia'
                                    subtitle='Nuestros padres'
                                    className='mb-4'
                                />
                            </ScrollReveal>

                            <section className='family__parents'>
                                <ScrollReveal direction="right" distance={30} rotate={-2} duration={1.0} delay={0.25}>
                                    <div className="family__pattern">
                                        <h3 className='family__subtitle text-center'>Padres de la Novia</h3>
                                        <p className='text-center'>Irma Palos Sánchez</p>
                                        <p className='text-center'>Francisco Chávez Razgado</p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="left" distance={30} rotate={2} duration={1.0} delay={0.4}>
                                    <div className="family__pattern">
                                        <h3 className='text-center'>Padres del Novio</h3>
                                        <p className='text-center'>Juana Verónica Nava Trinidad</p>
                                    </div>
                                </ScrollReveal>
                            </section>

                            <ScrollReveal direction="none" scale={0.96} rotate={-10} blur={2} duration={1.0} delay={0.55}>
                                <div className='family__iconBox' onClick={handleFlip}>
                                    <img src={iniciales} alt="Iniciales" className='family__icon' />
                                    <span className="family__flip-hint">Ver padrinos</span>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    <div className="family__card-back family__container">
                        <div className="family__content">
                            <SectionHeader
                                title='Familia'
                                subtitle='Nuestros padrinos'
                                className='mb-4'
                            />

                            <section className='family__godparents'>
                                <div className="family__pattern">
                                    <h3 className='text-center'>Padrinos Principales</h3>
                                    <p className='text-center'>Efrén Luna Dueñas</p>
                                    <p className='text-center'>Aime Naheli Martínez Cortés</p>
                                </div>
                            </section>

                            <div className='family__iconBox' onClick={handleFlip}>
                                <img src={iniciales} alt="Iniciales" className='family__icon' />
                                <span className="family__flip-hint">Ver padres</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

import React from 'react'
import './_family.scss'
import { SectionHeader, ScrollReveal } from '@/common/components'
import iniciales from '@/assets/images/iniciales.jpeg'
import bg from '@/assets/images/bg-family.png'

export const Family: React.FC = () => {
    return (
        <section className='family'>
            <div className='family__bg' style={{ backgroundImage: `url(${bg})` }} />

            <div className="family__container">
                <div className="family__content">
                    <ScrollReveal direction="down" distance={40} blur={8} duration={3.0} delay={0.4}>
                        <SectionHeader
                            title='Familia'
                            subtitle='Nuestros padres y padrinos'
                            className='mb-4'
                        />
                    </ScrollReveal>

                    <section className='family__parents'>
                        <ScrollReveal direction="right" distance={60} rotate={-3} duration={3.2} delay={1.2}>
                            <div className="family__pattern">
                                <h3 className='family__subtitle text-center'>Padres de la Novia</h3>
                                <p className='text-center'>Irma Palos Sánchez</p>
                                <p className='text-center'>Francisco Chávez Razgado</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" distance={60} rotate={3} duration={3.2} delay={2.0}>
                            <div className="family__pattern">
                                <h3 className='text-center'>Padres del Novio</h3>
                                <p className='text-center'>Juana Verónica Nava Trinidad</p>
                            </div>
                        </ScrollReveal>
                    </section>

                    <ScrollReveal direction="none" scale={0.4} rotate={-45} blur={15} duration={3.5} delay={2.8}>
                        <div className='family__iconBox'>
                            <img src={iniciales} alt="Paloma" className='family__icon' loading="lazy" />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={50} rotateX={8} duration={3.2} delay={3.6}>
                        <section className='family__godparents'>
                            <div className="family__pattern">
                                <h3 className='text-center'>Padrinos Principales</h3>
                                <p className='text-center'>Efrén Luna Dueñas</p>
                                <p className='text-center'>Aime Naheli Martínez Cortés</p>
                            </div>
                        </section>
                    </ScrollReveal>
                </div>
            </div>

        </section>
    )
}

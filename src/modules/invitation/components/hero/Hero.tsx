import React from 'react'
import './_hero.scss'
import bg from '@/assets/images/hero.jpeg'
import ringsImg from '@/assets/images/anillos.png'

export const Hero: React.FC = () => {
    return (
        <section className='hero'>
            <div className="hero__overlay"></div>
            <img className='hero__background' src={bg} alt="Foto de fondo" />

            <div className="hero__content">
                <div className='hero__content-container'>
                    <span className='hero__content-message'>&mdash; Save the Date &mdash;</span>

                    <h1 className='hero__title'>
                        <span>Mariana</span>
                        <span>&</span>
                        <span>Ernesto</span>
                    </h1>

                    <span className='hero__content-message'>¡Nos casamos!</span>

                    <div className='hero__date'>
                        <div className='hero__date-container'>
                            <p>Julio |</p>
                            <p className='hero__date-number'>18</p>
                            <p>| Sábado</p>
                        </div>
                        <span>2026</span>
                    </div>
                    <img src={ringsImg} className='hero__date-image' alt="Anillos de boda" />
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-indicator-inner">
                    <span className="hero__scroll-text">Desliza</span>
                    <i className="bx bx-chevron-down hero__scroll-arrow"></i>
                </div>
            </div>
        </section>
    )
}

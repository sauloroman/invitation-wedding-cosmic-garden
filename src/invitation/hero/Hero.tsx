import React from 'react'
import bgVideo from '../../assets/videos/bg-hero.mp4'
import ringsImg from '../../assets/images/anillos.png'

export const Hero: React.FC = () => {
    return (
        <section className='hero'>
            <div className="hero__overlay"></div>
            <video className='hero__background' src={bgVideo} autoPlay muted loop playsInline></video>

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

import React, { useRef } from 'react'
import { useInView } from 'framer-motion'

import { ScrollReveal } from '@/common/components'

import pedirMano from '@/assets/videos/peticion.mp4'
import bg from '@/assets/images/bg-message.jpeg'

import './_message.scss'

export const Message: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "200px" })

    return (
        <section className='message' ref={containerRef}>
            <div className="message__bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <ScrollReveal direction="up" distance={30} rotateX={-3} scale={0.98} blur={4} duration={1.2} delay={0.1}>
                <section className='message__container'>
                    {isInView ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={pedirMano}
                            className='message__video'
                        />
                    ) : (
                        <div className="message__video-placeholder" style={{ width: '100%', height: '100%' }} />
                    )}
                </section>
            </ScrollReveal>

            <ScrollReveal direction='down' distance={30} rotateY={3} blur={3} duration={1.0} delay={0.3}>
                <div className="message__content">
                    <i className="bxf bx-heart message__icon"></i>
                    <p>Prometo cuidarte, respetarte, valorarte y amarte todos los días de mi vida.</p>
                </div>
            </ScrollReveal>
            <div className="message__line message__line--top"></div>
        </section>
    )
}

import React, { useRef } from 'react'
import { useInView } from 'framer-motion'

import { ScrollReveal } from '@/common/components'

import pedirMano from '@/assets/videos/peticion.mp4'

import './_message.scss'

export const Message: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "200px" })

    return (
        <section className='message' ref={containerRef}>
            <ScrollReveal direction="up" distance={60} rotateX={-7} scale={0.96} blur={12} duration={3.5} delay={0.6}>
                <section className='message__container'>
                    <div className="message__overall"></div>
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

            <ScrollReveal direction='down' distance={60} rotateY={7} blur={6} duration={2.0} delay={2.0}>
                <div className="message__content">
                    <i className="bxf bx-heart message__icon"></i>
                    <p>Prometo cuidarte, respetarte, valorarte y amarte todos los días de mi vida.</p>
                </div>
            </ScrollReveal>
        </section>
    )
}

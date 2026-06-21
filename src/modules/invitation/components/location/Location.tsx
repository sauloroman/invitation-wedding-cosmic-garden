import React from 'react'

import { SectionHeader, ScrollReveal } from '@/common/components'
import { getEnvVariables } from '@/common/helpers/get-env-variables'
import { LocationSection } from './LocationSection'
import './_location.scss'

const {
    VITE_CURCH_NAME,
    VITE_CURCH_LOCATION,
    VITE_CURCH_HOUR,
    VITE_CURCH_URL_MAPS,
    VITE_RECEPTION_NAME,
    VITE_RECEPTION_LOCATION,
    VITE_RECEPTION_HOUR,
    VITE_RECEPTION_URL_MAPS
} = getEnvVariables()


export const Location: React.FC = () => {
    return (
        <main className='location'>
            <div className="location__container">
                <ScrollReveal direction="none" blur={3} scale={0.98} duration={1.0} delay={0.1}>
                    <div className="location__header">
                        <i className='bxf bx-location'></i>
                        <SectionHeader
                            title='Ubicaciones'
                            subtitle='Los senderos del jardín'
                            className='text-primary'
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" distance={20} duration={1.0} delay={0.25}>
                    <div className="location__message">
                        <p>Les compartimos la información de los lugares donde se llevarán a cabo los eventos, para que puedan planificar su llegada con anticipación.</p>
                    </div>
                </ScrollReveal>

                <section className="location__sections">
                    <LocationSection
                        concept='Ceremonia Religiosa'
                        name={VITE_CURCH_NAME}
                        location={VITE_CURCH_LOCATION}
                        hour={VITE_CURCH_HOUR}
                        buttonUrl={VITE_CURCH_URL_MAPS}
                        cardDirection="right"
                        cardRotate={-2}
                        cardDelay={0.3}
                    />

                    <LocationSection
                        concept='Recepción'
                        name={VITE_RECEPTION_NAME}
                        location={VITE_RECEPTION_LOCATION}
                        hour={VITE_RECEPTION_HOUR}
                        buttonUrl={VITE_RECEPTION_URL_MAPS}
                        cardDirection="left"
                        cardRotate={2}
                        cardDelay={0.5}
                    />
                </section>
            </div>
        </main>
    )
}

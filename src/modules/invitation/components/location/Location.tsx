import React from 'react'

import { SectionHeader, ScrollReveal } from '@/common/components'
import { getEnvVariables } from '@/common/helpers/get-env-variables'
import { LocationSection } from './LocationSection'

import hacienda from '@/assets/images/salon.png'
import cathedral from '@/assets/images/templo.png'

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
                <ScrollReveal direction="none" blur={8} scale={0.94} duration={3.0} delay={0.4}>
                    <SectionHeader
                        title='Ubicaciones'
                        subtitle='Los senderos del jardín'
                        className='text-primary'
                    />
                </ScrollReveal>

                <ScrollReveal direction="up" distance={25} duration={3.2} delay={1.2}>
                    <div className="location__message">
                        <p>Nuestra historia no estaría completa sin ti. Nos haría inmensamente felices contar con tu presencia.</p>
                    </div>
                </ScrollReveal>

                <div className="location__line"></div>

                <LocationSection
                    concept='Ceremonia Religiosa'
                    name={VITE_CURCH_NAME}
                    location={VITE_CURCH_LOCATION}
                    hour={VITE_CURCH_HOUR}
                    buttonUrl={VITE_CURCH_URL_MAPS}
                    image={cathedral}
                    cardDirection="right"
                    cardRotate={-2}
                    cardDelay={1.8}
                    imageDirection="left"
                    imageRotate={2}
                    imageDelay={2.8}
                />

                <div className="location__line"></div>

                <LocationSection
                    concept='Recepción'
                    name={VITE_RECEPTION_NAME}
                    location={VITE_RECEPTION_LOCATION}
                    hour={VITE_RECEPTION_HOUR}
                    buttonUrl={VITE_RECEPTION_URL_MAPS}
                    image={hacienda}
                    cardDirection="left"
                    cardRotate={2}
                    cardDelay={2.2}
                    imageDirection="right"
                    imageRotate={-2}
                    imageDelay={3.2}
                />
            </div>
        </main>
    )
}

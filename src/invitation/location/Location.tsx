import React from 'react'
import cathedral from '../../assets/images/templo.png'
import hacienda from '../../assets/images/salon.png'
import { SectionHeader, Button, ScrollReveal } from '../../common/components'
import { onGoToGoogleMaps } from '../../common/helpers/navigate'
import { getEnvVariables } from '../../common/helpers/get-env-variables'

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

interface Props {
    concept: string;
    name: string;
    location: string;
    hour: string;
    buttonUrl: string;
    image: string;
    cardDirection?: 'up' | 'down' | 'left' | 'right' | 'none';
    cardRotate?: number;
    cardDelay?: number;
    imageDirection?: 'up' | 'down' | 'left' | 'right' | 'none';
    imageRotate?: number;
    imageDelay?: number;
}

const LocationSection: React.FC<Props> = ({
    concept,
    name,
    location,
    hour,
    buttonUrl,
    image,
    cardDirection = 'right',
    cardRotate = 0,
    cardDelay = 0.2,
    imageDirection = 'left',
    imageRotate = 0,
    imageDelay = 0.4
}) => {
    return (
        <section className='location__section'>
            <ScrollReveal direction={cardDirection} distance={50} rotate={cardRotate} duration={3.5} delay={cardDelay}>
                <div className="location__card">
                    <span className='location__card-type'>{concept}</span>
                    <h3 className='location__card-title'>{name}</h3>
                    <p className='location__card-address'>{location}</p>
                    <div className='location__card-hour'>
                        <span>{hour}</span>
                    </div>
                    <div className="location__card-button">
                        <Button action={() => onGoToGoogleMaps(buttonUrl)} variant="outline-tertiary">
                            Ver Ubicación
                        </Button>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal direction={imageDirection} distance={50} scale={1.03} rotate={imageRotate} duration={3.5} delay={imageDelay} blur={8}>
                <div className="location__section-image opacity-75">
                    <img src={image} alt={name} />
                </div>
            </ScrollReveal>
        </section>
    )
}

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

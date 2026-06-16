import React from "react"
import { onGoToGoogleMaps } from "@/common/helpers/navigate";
import { Button, ScrollReveal } from "@/common/components";

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

export const LocationSection: React.FC<Props> = ({
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
import React from "react"
import { onGoToSite } from "@/common/helpers/navigate";
import { Button, ScrollReveal } from "@/common/components";

interface Props {
    concept: string;
    name: string;
    location: string;
    hour: string;
    buttonUrl: string;
    cardDirection?: 'up' | 'down' | 'left' | 'right' | 'none';
    cardRotate?: number;
    cardDelay?: number;
}

export const LocationSection: React.FC<Props> = ({
    concept,
    name,
    location,
    hour,
    buttonUrl,
    cardDirection = 'right',
    cardRotate = 0,
    cardDelay = 0.2
}) => {
    return (
        <section className='location__section'>
            <ScrollReveal direction={cardDirection} distance={30} rotate={cardRotate} duration={1.2} delay={cardDelay}>
                <div className="location__card">
                    <span className='location__card-type'>{concept}</span>
                    <h3 className='location__card-title'>{name}</h3>
                    <p className='location__card-address'>{location}</p>
                    <div className='location__card-hour'>
                        <span>{hour}</span>
                    </div>
                    <div className="location__card-button">
                        <Button action={() => onGoToSite(buttonUrl)} variant="outline-tertiary">
                            Ver Ubicación
                        </Button>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}
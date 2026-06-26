import React from 'react'
import {
    Church,
    Wine,
    Heart,
    Camera,
    ForkKnife,
    MusicNotes,
    Confetti,
    Guitar,
    Moon
} from '@phosphor-icons/react'
import './_itinerary.scss'
import { SectionHeader, ScrollReveal } from '@/common/components'

type PhosphorIcon = React.ComponentType<{
    size?: number | string;
    weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
    className?: string;
}>;

interface ItineraryEvent {
    time: string;
    description: string;
    icon: PhosphorIcon;
}

const ITINERARY_EVENTS: ItineraryEvent[] = [
    {
        time: '07:00 P.M.',
        description: 'Ceremonia Religiosa',
        icon: Church
    },
    {
        time: '09:00 P.M.',
        description: 'Recepción',
        icon: Wine
    },
    {
        time: '09:30 P.M.',
        description: 'Entrada de los novios',
        icon: Heart
    },
    {
        time: '09:30 - 10:00 P.M.',
        description: 'Fotos con los novios',
        icon: Camera
    },
    {
        time: '10:00 - 10:30 P.M.',
        description: 'Cena',
        icon: ForkKnife
    },
    {
        time: '10:40 P.M.',
        description: 'Vals nupcial',
        icon: MusicNotes
    },
    {
        time: '11:00 P.M.',
        description: 'Fiesta',
        icon: Confetti
    },
    {
        time: '12:00 - 02:00 A.M.',
        description: 'Música Norteña',
        icon: Guitar
    },
    {
        time: '02:00 A.M.',
        description: 'Fin de la fiesta',
        icon: Moon
    }
];

export const Itinerary: React.FC = () => {
    return (
        <section className='itinerary'>
            <div className="itinerary__container">

                <div className='itinerary__header'>
                    <div className="itinerary__decoration">
                        <i className='bxf bx-star itinerary__decoration-icon' />
                        <i className='bxf bx-star itinerary__decoration-icon' />
                        <i className='bxf bx-star itinerary__decoration-icon' />
                    </div>

                    <ScrollReveal direction='up' distance={20} duration={1.0} delay={0.1}>
                        <SectionHeader
                            title='Itinerario'
                            subtitle='Nuestro recorrido juntos'
                        />
                    </ScrollReveal>
                </div>

                <ul className="itinerary__list">
                    {ITINERARY_EVENTS.map((event, index) => {
                        const IconComponent = event.icon;
                        return (
                            <li key={index} className='itinerary__item'>
                                <ScrollReveal
                                    direction={index % 2 === 0 ? 'right' : 'left'}
                                    distance={30}
                                    duration={1.0}
                                    delay={0.15}
                                >
                                    <div className="itinerary__card">
                                        <div className="itinerary__card-icon-container">
                                            <IconComponent
                                                weight="light"
                                                size={32}
                                                className="itinerary__card-icon"
                                            />
                                        </div>
                                        <div className="itinerary__card-content">
                                            <span className="itinerary__card-badge">{event.time}</span>
                                            <p className="itinerary__card-description">{event.description}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    )
}

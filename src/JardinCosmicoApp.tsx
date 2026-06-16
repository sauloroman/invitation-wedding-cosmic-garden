import React from 'react'
import {
    Hero,
    Countdown,
    Message,
    Location,
    Presents,
    Reminders,
    Welcome,
    Family,
    Guest,
    Farewell
} from './invitation'
import { Music } from './common/components/Music/Music'

export const JardinCosmicoApp: React.FC = () => {
    return (
        <>
            <div>
                <Hero />
                <Welcome />
                <Countdown />
                <Message />
                <Family />
                <Location />
                <Reminders />
                <Presents />
                <Guest />
                <Farewell />
                {/* Despedida */}
            </div>
            <Music />
        </>
    )
}

import React from 'react'
import { Hero, Countdown, Welcome, Guest, Message, Family, Location, Reminders, Presents, Itinerary, Farewell } from '..'
import { ControlsEnvelope } from '@/common/components'

export const Invitation: React.FC = () => {
    return (
        <>
            <div id="invitation">
                <Hero />
                <Welcome />
                <Countdown />
                <Guest />
                <Message />
                <Family />
                <Location />
                <Reminders />
                <Presents />
                <Itinerary />
                <Farewell />
            </div>
            <ControlsEnvelope />
        </>
    )
}

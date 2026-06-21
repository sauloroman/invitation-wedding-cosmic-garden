import React from 'react'
import { Hero, Countdown, Welcome, Guest, Message, Family, Location, Reminders, Presents, Itinerary, Farewell } from '..'

export const Invitation: React.FC = () => {
    return (
        <div>
            <div id="invitation">
                <div id="hero"><Hero /></div>
                <div id="welcome"><Welcome /></div>
                <div id="countdown"><Countdown /></div>
                <div id="guest"><Guest /></div>
                <div id="message"><Message /></div>
                <div id="family"><Family /></div>
                <div id="location"><Location /></div>
                <div id="reminders"><Reminders /></div>
                <div id="presents"><Presents /></div>
                <div id="itinerary"><Itinerary /></div>
                <div id="farewell"><Farewell /></div>
            </div>
        </div>
    )
}


import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Invitation = lazy(() => import('@/modules/invitation').then(m => ({ default: m.Invitation })))
const Envelope = lazy(() => import('@/modules/envelope').then(m => ({ default: m.Envelope })))
const Ticket = lazy(() => import('@/modules/ticket').then(m => ({ default: m.Ticket })))

export const PrivateRoutes: React.FC = () => {
    return (
        <Suspense fallback={<div className='loading-spinner'></div>}>
            <Routes>
                <Route path='/' element={<Invitation />} />
                <Route path='envelope' element={<Envelope />} />
                <Route path='ticket' element={<Ticket />} />
            </Routes>
        </Suspense>
    )
}

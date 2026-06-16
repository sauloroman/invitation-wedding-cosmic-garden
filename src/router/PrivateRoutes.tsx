import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Envelope } from '@/modules/envelope'
import { Invitation } from '@/modules/invitation'
import { Ticket } from '@/modules/ticket'

export const PrivateRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Invitation />} />
            <Route path='envelope' element={<Envelope />} />
            <Route path='ticket' element={<Ticket />} />
        </Routes>
    )
}

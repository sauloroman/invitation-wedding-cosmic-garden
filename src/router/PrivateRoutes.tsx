import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { JardinCosmicoApp } from '../JardinCosmicoApp'
import { Ticket } from '../ticket/Ticket'

export const PrivateRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<JardinCosmicoApp />} />
            <Route path='ticket' element={<Ticket />} />
        </Routes>
    )
}

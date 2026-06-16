import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Envelop } from '../envelope/Envelope'
import { Login } from '../login/Login'

export const PublicRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='envelope' element={<Envelop />} />
            <Route path='login' element={<Login />} />
        </Routes>
    )
}

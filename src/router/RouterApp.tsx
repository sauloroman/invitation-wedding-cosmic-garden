import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const RouterApp: React.FC = () => {
    return (
        <BrowserRouter>
            <PrivateRoutes />
            <PublicRoutes />
        </BrowserRouter>
    )
}

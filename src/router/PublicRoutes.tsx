import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Search } from '@/modules/search'

export const PublicRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='search' element={<Search />} />
        </Routes>
    )
}

import React from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'

import { store } from './store'

import { RouterApp } from './router/RouterApp'

import { ModalMaster } from './common/components'

export const JardinCosmicoApp: React.FC = () => {
    return (
        <Provider store={store}>
            <RouterApp />

            <Toaster position='top-center' closeButton />
            <ModalMaster />
        </Provider>
    )
}

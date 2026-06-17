import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

import { RouterApp } from './router/RouterApp'

import { ModalMaster, ControlsMusic } from './common/components'

export const JardinCosmicoApp: React.FC = () => {
    return (
        <Provider store={store}>
            <RouterApp />

            <ControlsMusic />
            <ModalMaster />
        </Provider>
    )
}

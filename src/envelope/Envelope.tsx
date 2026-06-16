import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Hero } from '../invitation/hero/Hero'
import { EnvelopeBase } from './components/EnvelopeBase/EnvelopeBase'
import sealImage from '../assets/images/iniciales.jpeg'

export const Envelop: React.FC = () => {
    const navigate = useNavigate()
    const [isOpening, setIsOpening] = useState(false)
    const [isNavigating, setIsNavigating] = useState(false)

    const handleOpen = () => {
        if (isOpening) return
        setIsOpening(true)

        setTimeout(() => {
            setIsNavigating(true)
        }, 2800)

        setTimeout(() => {
            navigate('/')
        }, 3600)
    }

    const handleSkip = () => {
        setIsNavigating(true)
        setTimeout(() => {
            navigate('/')
        }, 500)
    }

    return (
        <EnvelopeBase
            isOpening={isOpening}
            onOpen={handleOpen}
            sealImage={sealImage}
            onSkip={handleSkip}
            isNavigating={isNavigating}
        >
            <Hero />
        </EnvelopeBase>
    )
}

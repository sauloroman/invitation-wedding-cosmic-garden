import { useState } from "react"

interface Props {
    navigateTo: (path: string) => void
}

export const useEnvelope = ({ navigateTo }: Props) => {
    const [isOpening, setIsOpening] = useState(false)
    const [isNavigating, setIsNavigating] = useState(false)

    const handleOpen = () => {
        if (isOpening) return
        setIsOpening(true)

        setTimeout(() => {
            setIsNavigating(true)
        }, 2800)

        setTimeout(() => {
            navigateTo('/')
        }, 4000)
    }

    const handleSkip = () => {
        setIsNavigating(true)
        setTimeout(() => {
            navigateTo('/')
        }, 500)
    }

    return {
        isOpening,
        isNavigating,

        handleOpen,
        handleSkip
    }
}
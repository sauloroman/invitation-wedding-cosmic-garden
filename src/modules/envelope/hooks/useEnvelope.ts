import { useState } from "react"

interface Props {
    navigateTo: (path: string) => void
}

export const useEnvelope = ({ navigateTo }: Props) => {
    const [isOpening, setIsOpening] = useState(false)

    const handleOpen = () => {
        if (isOpening) return
        setIsOpening(true)

        setTimeout(() => {
            navigateTo('/')
        }, 2500)
    }

    const handleSkip = () => {
        navigateTo('/')
    }

    return {
        isOpening,

        handleOpen,
        handleSkip
    }
}
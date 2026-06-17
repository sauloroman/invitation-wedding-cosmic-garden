import { useEffect, useRef, useState } from "react"

export const useMusicPlay = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.play().catch(err => {
                console.log('Playback prevented by browser autoplay policy:', err)
                setIsPlaying(false)
            })
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    return {
        isPlaying,
        setIsPlaying,
        audioRef
    }
}
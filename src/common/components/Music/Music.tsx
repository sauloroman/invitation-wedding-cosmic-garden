import React, { useState, useRef, useEffect } from 'react'
import { Button } from '../Button/Button'
import song from '../../../assets/music/song.mp3'

export const Music: React.FC = () => {
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

    return (
        <section>
            <Button action={() => setIsPlaying(!isPlaying)} variant="secondary" className="music">
                <i className={`bx ${isPlaying ? 'bx-pause' : 'bx-play'} music__icon`} />
            </Button>
            <audio ref={audioRef} src={song} loop />
        </section>
    )
}

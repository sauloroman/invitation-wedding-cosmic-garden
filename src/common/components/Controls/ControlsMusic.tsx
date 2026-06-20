import React from 'react'

import { Button } from '@/common/components/Button/Button'
import { useMusicPlay } from '@/common/hooks/useMusicPlay'

import song from '@/assets/music/song.mp3'

import './_controls.scss'

export const ControlsMusic: React.FC = () => {
    const { isPlaying, setIsPlaying, audioRef } = useMusicPlay()

    return (
        <section>
            <Button action={() => setIsPlaying(!isPlaying)} variant="primary" className="controls controls--music">
                <i className={`bx ${isPlaying ? 'bx-pause' : 'bx-music'} controls__icon`} />
            </Button>
            <audio ref={audioRef} src={song} loop />
        </section>
    )
}

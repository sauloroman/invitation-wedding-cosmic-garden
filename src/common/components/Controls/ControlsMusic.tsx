import React from 'react'
import { useLocation } from 'react-router-dom'

import { Button } from '@/common/components/Button/Button'
import { useMusicPlay } from '@/common/hooks/useMusicPlay'

import './_controls.scss'

export const ControlsMusic: React.FC = () => {
    const { isPlaying, setIsPlaying } = useMusicPlay()
    const { pathname } = useLocation()
    const showButton = pathname !== '/envelope'

    return (
        <section>
            {showButton && (
                <Button action={() => setIsPlaying(!isPlaying)} variant="primary" className="controls controls--music">
                    <i className={`bx ${isPlaying ? 'bx-pause' : 'bx-music'} controls__icon`} />
                </Button>
            )}
        </section>
    )
}

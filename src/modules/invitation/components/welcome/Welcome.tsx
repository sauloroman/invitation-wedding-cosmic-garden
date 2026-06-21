import React from 'react'
import { SectionHeader, MusicPlayer } from '@/common/components'

import './_welcome.scss'

export const Welcome: React.FC = () => {
    return (
        <section className='welcome'>
            <div className="welcome__container">
                <SectionHeader
                    title='Querida Familia'
                    subtitle=''
                />
                <p className='welcome__message'>Acompáñanos en la celebración de nuestro amor y que juntos compartamos este momento tan especial.</p>

                <MusicPlayer />
            </div>
        </section>
    )
}


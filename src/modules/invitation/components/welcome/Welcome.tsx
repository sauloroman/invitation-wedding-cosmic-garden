import React from 'react'

import { SectionHeader } from '@/common/components'

import './_welcome.scss'

export const Welcome: React.FC = () => {
    return (
        <section className='welcome'>
            <div className="welcome__container">
                <SectionHeader
                    title='Querida Famlia'
                    subtitle=''
                />
                <p className='welcome__message'>Acompáñanos en la celebración de nuestro amor y que juntos compartamos este momento tan especial.</p>
            </div>
        </section>
    )
}

import React from 'react'
import './_section-header.scss'

interface Props {
    title: string,
    subtitle: string,
    className?: string
}

export const SectionHeader: React.FC<Props> = ({ title, subtitle, className = 'countdown__header' }) => {
    return (
        <header className={`section-header ${className}`}>
            <h2 className='section-header__title'>&mdash; {title} &mdash;</h2>
            <span className='section-header__subtitle'>{subtitle}</span>
        </header>
    )
}

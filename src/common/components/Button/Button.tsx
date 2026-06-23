import React from 'react'
import './_button.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    action: () => void,
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'outline-primary' | 'outline-secondary' | 'outline-tertiary' | 'outline-accent'
    size?: 'small' | 'medium' | 'large',
    className?: string
}

export const Button: React.FC<Props> = ({
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    action,
    ...rest
}) => {
    return (
        <button
            className={`btn btn--${variant} btn--${size} ${className}`}
            {...rest}
            onClick={action}
        >
            {children}
        </button>
    )
}

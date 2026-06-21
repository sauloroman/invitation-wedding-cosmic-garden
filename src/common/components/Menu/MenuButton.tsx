import React from 'react'
import './_menu.scss'
import { useMenu } from '@/common/hooks/useMenu'

export const MenuButton: React.FC = () => {
    const { handleOpenMenu, isOpen } = useMenu()

    return (
        <button 
            className={`menu-button ${isOpen ? 'menu-button--hidden' : ''}`} 
            onClick={handleOpenMenu}
        >
            <i className='bx bx-menu menu-button__icon' />
        </button>
    )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigation } from '@/common/hooks/useNavigate'
import { useMenu } from '@/common/hooks/useMenu'
import './_menu.scss'
import { useTicket } from '@/modules/ticket/hooks/useTicket'

export const Menu: React.FC = () => {
    const { isOpen, handleCloseMenu } = useMenu()
    const { navigateTo } = useNavigation()
    const navigate = useNavigate()
    const { onRemoveTicket } = useTicket()

    const handleNavigate = (path: string, hash?: string) => {
        handleCloseMenu()
        if (hash) {
            if (window.location.pathname === '/') {
                const element = document.getElementById(hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            } else {
                navigate('/')
                setTimeout(() => {
                    const element = document.getElementById(hash)
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                    }
                }, 300)
            }
        } else {
            navigateTo(path)
        }
    }

    const onLogout = () => {
        onRemoveTicket()
        navigateTo('/search')
    }

    return (
        <>
            <div
                className={`menu-overlay ${isOpen ? 'menu-overlay--open' : 'menu-overlay--close'}`}
                onClick={handleCloseMenu}
            />

            <aside className={`menu ${isOpen ? 'menu--open' : 'menu--close'}`}>
                <div className="menu__container">
                    <header className="menu__header">
                        <p className='menu__title'>Menú</p>
                        <i className='bx bx-x menu__icon' onClick={handleCloseMenu} />
                    </header>

                    <nav className="menu__nav">
                        <div className="menu__routes">
                            <button className="menu__btn menu__btn--envelope" onClick={() => handleNavigate('/envelope')}>
                                <i className="bx bx-envelope" />
                                <span>Sobre</span>
                            </button>
                            <button className="menu__btn menu__btn--ticket" onClick={() => handleNavigate('/ticket')}>
                                <i className="bx bx-barcode" />
                                <span>Mis Boletos</span>
                            </button>
                        </div>

                        <div className="menu__divider-horizontal" />

                        <ul className="menu__list">
                            <li className="menu__item" onClick={() => handleNavigate('/', 'hero')}>
                                <i className="bx bx-home menu__item-icon" />
                                <span>Inicio</span>
                            </li>
                            <li className="menu__item" onClick={() => handleNavigate('/', 'countdown')}>
                                <i className="bx bx-clock menu__item-icon" />
                                <span>Cuenta Atrás</span>
                            </li>
                            <li className="menu__item" onClick={() => handleNavigate('/', 'location')}>
                                <i className="bx bx-location menu__item-icon" />
                                <span>Ubicaciones</span>
                            </li>
                            <li className="menu__item" onClick={() => handleNavigate('/', 'itinerary')}>
                                <i className="bx bx-list-ul menu__item-icon" />
                                <span>Itinerario</span>
                            </li>
                            <li className="menu__item" onClick={() => handleNavigate('/', 'presents')}>
                                <i className="bx bx-gift menu__item-icon" />
                                <span>Mesa de Regalos</span>
                            </li>
                        </ul>

                        <button className="menu__btn menu__btn--exit" onClick={onLogout}>
                            <i className="bx bx-arrow-left" />
                            <span>Salir</span>
                        </button>
                    </nav>
                </div>
            </aside>
        </>
    )
}

import React from 'react'
import { useForm } from 'react-hook-form'

import bg from '@/assets/images/search.webp'
import { Button, ScrollReveal } from '@/common/components'
import { useTicket } from '@/modules/ticket/hooks/useTicket'
import './_search.scss'

interface TicketSearch {
    keyPass: string
}

export const Search: React.FC = () => {

    const { onGetTicket, isLoading } = useTicket()

    const { register, handleSubmit, formState: { errors } } = useForm<TicketSearch>({ defaultValues: { keyPass: '' } })

    return (
        <div className='search'>
            <div className="search__bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="search__container">

                <ScrollReveal direction="down" distance={20} duration={0.8} delay={0.1}>
                    <div className='search__logo'>
                        <i className='bxf bx-heart' />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" distance={24} duration={0.9} delay={0.2}>
                    <div className="search__hero">
                        <p className="search__hero-eyebrow">✦ Jardín Cósmico ✦</p>
                        <h1 className="search__hero-title">Tu lugar en el jardín te está esperando</h1>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" distance={20} duration={0.9} delay={0.35}>
                    <form onSubmit={handleSubmit(data => onGetTicket(data.keyPass))} className='search__form'>
                        <div className='search__input-container'>
                            <label className='search__input-label' htmlFor="keyPass">Ingresa tu clave de acceso</label>
                            <input
                                {...register('keyPass', {
                                    required: 'La clave de acceso es requerida',
                                    minLength: { value: 4, message: 'La clave de acceso debe tener al menos 4 caracteres' },
                                })}
                                className='search__input' id='keyPass' type="text" placeholder='Ej. 1234' />
                            <span className='search__input-error'>{errors.keyPass?.message}</span>
                        </div>
                        <Button type="submit" disabled={isLoading} className='search__button' variant='primary' action={() => { }}>
                            {isLoading ? 'Buscando...' : 'Buscar'}
                        </Button>
                    </form>
                </ScrollReveal>

            </div>
        </div>
    )
}

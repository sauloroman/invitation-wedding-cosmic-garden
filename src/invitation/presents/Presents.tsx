import React from 'react'
import { Button, SectionHeader, Accordion, AccordionItem, ScrollReveal } from '../../common/components'
import bg from '../../assets/images/bg-presents.jpeg'
import { useModal } from '../../hooks/useModal'
import { MODAL_NAMES } from '../../store/ui/modal.slice'
import { PresentsGifModal } from './presents-gif-modal/PresentsGifModal'

export const Presents: React.FC = () => {
    const { actions, attributes: modal } = useModal()

    return (
        <>

            <section className='presents'>
                <div className='presents__bg' style={{ backgroundImage: `url(${bg})` }} />
                <div className="presents__container">
                    <ScrollReveal direction="down" distance={40} blur={8} duration={3.0} delay={0.5}>
                        <SectionHeader
                            title='Regalos'
                            subtitle='Lo material no es lo importante'
                        />
                    </ScrollReveal>

                    <ScrollReveal direction="none" scale={0.94} rotateX={6} blur={8} duration={3.5} delay={1.8}>
                        <p className="presents__message">Su compañía es el mejor regalo, sin embargo, si desean contribuir a nuestro nuevo hogar, les compartimos algunas opciones. </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={70} rotateX={8} scale={0.97} duration={3.8} delay={3.0}>
                        <div className="presents__options">
                            <Accordion>
                                <AccordionItem
                                    id="gift-registry"
                                    title="Mesa de regalos"
                                    icon={<i className='bxf bx-gift color-primary' />}
                                >
                                    <div className='presents__option-info'>
                                        <p>Elige de la lista para apoyar a nuestra luna de miel.</p>
                                        <div className="presents__option-button">
                                            <Button variant='outline-primary' action={() => actions.openModal('Lista de Regalos', MODAL_NAMES.presents)}>Ver Lista de Regalos</Button>
                                        </div>
                                    </div>
                                </AccordionItem>
                                <AccordionItem
                                    id="envelope-rain"
                                    title="Lluvia de sobres" classNameButton='presents__option'
                                    icon={<i className='bxf bx-envelope color-primary' />}
                                >
                                    <div className="presents__option-info">
                                        <p>Es una tradición en la que puedes apoyar a los novios con un obsequio monetario en un sobre durante la recepción.</p>
                                    </div>
                                </AccordionItem>
                                <AccordionItem
                                    id="wire-transfer"
                                    title="Transferencia"
                                    classNameButton='presents__option'
                                    icon={<i className='bxf bx-credit-card color-primary ' />}
                                >
                                    <div className="presents__option-info">
                                        <p>Si prefieres hacer una transferencia, puedes hacerlo a la siguiente cuenta:</p>
                                        <p className='text-strong'>BANORTE: 4189 1433 1956 0622</p>
                                    </div>
                                </AccordionItem>
                                <AccordionItem
                                    id="heart-gift"
                                    title="Detalle de corazón"
                                    classNameButton='presents__option'
                                    icon={<i className='bxf bx-heart color-primary' />}
                                >
                                    <div className="presents__option-info">
                                        <p>Sabemos que a veces es complicado encontrar el regalo perfecto, por eso, si lo deseas, puedes darnos un detalle de corazón el día de la celebración.</p>
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            {modal.isOpen && modal.modalName === MODAL_NAMES.presents && <PresentsGifModal />}
        </>
    )
}

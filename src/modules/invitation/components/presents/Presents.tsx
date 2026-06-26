import React from 'react'
import { Gift, Envelope, CreditCard, Heart } from '@phosphor-icons/react'
import { MODAL_NAMES } from '@/store/ui/modal.slice'
import { useModal } from '@/common/hooks/useModal'
import { Button, SectionHeader, Accordion, AccordionItem, ScrollReveal } from '@/common/components'
import bg from '@/assets/images/bg-presents.jpeg'
import './_presents.scss'

type PhosphorIcon = React.ComponentType<{
    size?: number | string;
    weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
    className?: string;
}>;

interface PresentOption {
    id: string;
    title: string;
    icon: PhosphorIcon;
    classNameButton?: string;
    renderContent: () => React.ReactNode;
}

export const Presents: React.FC = () => {
    const { actions } = useModal()

    const presentsOptions: PresentOption[] = [
        {
            id: 'gift-registry',
            title: 'Mesa de regalos',
            icon: Gift,
            renderContent: () => (
                <div className='presents__option-info'>
                    <p>Elige de la lista para apoyar a nuestra luna de miel.</p>
                    <div className="presents__option-button">
                        <Button
                            variant='outline-primary'
                            action={() => actions.openModal('Lista de Regalos', MODAL_NAMES.presents)}
                        >
                            Ver Lista de Regalos
                        </Button>
                    </div>
                </div>
            )
        },
        {
            id: 'envelope-rain',
            title: 'Lluvia de sobres',
            classNameButton: 'presents__option',
            icon: Envelope,
            renderContent: () => (
                <div className="presents__option-info">
                    <p>Es una tradición en la que puedes apoyar a los novios con un obsequio monetario en un sobre durante la recepción.</p>
                </div>
            )
        },
        {
            id: 'wire-transfer',
            title: 'Transferencia',
            classNameButton: 'presents__option',
            icon: CreditCard,
            renderContent: () => (
                <div className="presents__option-info">
                    <p>Si prefieres hacer una transferencia, puedes hacerlo a la siguiente cuenta:</p>
                    <p className='text-strong'>BANORTE: 4189 1433 1956 0622</p>
                </div>
            )
        },
        {
            id: 'heart-gift',
            title: 'Detalle de corazón',
            classNameButton: 'presents__option',
            icon: Heart,
            renderContent: () => (
                <div className="presents__option-info">
                    <p>Sabemos que a veces es complicado encontrar el regalo perfecto, por eso, si lo deseas, puedes darnos un detalle de corazón el día de la celebración.</p>
                </div>
            )
        }
    ];

    return (
        <section className='presents'>
            <div className='presents__bg' style={{ backgroundImage: `url(${bg})` }} />
            <div className="presents__container">
                <ScrollReveal direction="down" distance={20} blur={3} duration={1.0} delay={0.1}>
                    <SectionHeader
                        title='Regalos'
                        subtitle='Lo material no es lo importante'
                    />
                </ScrollReveal>

                <ScrollReveal direction="none" scale={0.98} rotateX={2} blur={3} duration={1.0} delay={0.25}>
                    <p className="presents__message">Su compañía es el mejor regalo, sin embargo, si desean contribuir a nuestro nuevo hogar, les compartimos algunas opciones. </p>
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} rotateX={3} scale={0.99} duration={1.2} delay={0.4}>
                    <div className="presents__options">
                        <Accordion>
                            {presentsOptions.map((option) => {
                                const IconComponent = option.icon;
                                return (
                                    <AccordionItem
                                        key={option.id}
                                        id={option.id}
                                        title={option.title}
                                        classNameButton={option.classNameButton}
                                        icon={
                                            <IconComponent
                                                weight="light"
                                                size={24}
                                                className="color-primary"
                                            />
                                        }
                                    >
                                        {option.renderContent()}
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

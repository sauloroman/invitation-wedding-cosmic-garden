import React from 'react'
import { Modal } from '@/common/components/Modal/Modal'
import { gifts } from '@/common/data/gifts'
import { Button } from '@/common/components'
import { onGoToSite } from '@/common/helpers/navigate'

export const PresentsGifModal: React.FC = () => {
    return (
        <Modal>
            <div className="gifts-list">
                <p className="gifts-list__intro">
                    Hemos seleccionado algunas opciones que nos encantarían para nuestro hogar. Haz clic para ver el artículo en Mercado Libre:
                </p>
                {gifts.map(gift => (
                    <div key={gift.id} className="gifts-list__item">
                        <div className="gifts-list__info">
                            <span className="gifts-list__number">#{gift.id}</span>
                            <p className="gifts-list__name">{gift.name}</p>
                        </div>
                        <div className="gifts-list__button">
                            <Button
                                variant='outline-secondary'
                                action={() => onGoToSite(gift.url)}
                            >
                                Regalar <i className="bx bx-link-external"></i>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Modal >
    )
}

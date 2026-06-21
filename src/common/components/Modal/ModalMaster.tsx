import React from 'react'

import { useModal } from '@/common/hooks/useModal'

import { MODAL_NAMES } from '@/store/ui/modal.slice'

import { PresentsGifModal } from '@/modules/invitation/components/presents/PresentsGifModal'
import { TicketModal } from '@/modules/ticket/components/TicketModal'

export const ModalMaster: React.FC = () => {
    const { attributes: modal } = useModal()

    return (
        <>
            {modal.isOpen && modal.modalName === MODAL_NAMES.presents && <PresentsGifModal />}
            {modal.isOpen && modal.modalName === MODAL_NAMES.ticket && <TicketModal />}
        </>
    )
}
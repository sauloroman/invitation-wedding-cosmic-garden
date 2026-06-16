import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { openModal as openModalAction, closeModal as closeModalAction, type ModalName } from '../store/ui/modal.slice'

export const useModal = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isOpen, modalTitle, modalName } = useSelector((state: RootState) => state.modal);

    const openModal = (title: string, modalName: ModalName) => {
        dispatch(openModalAction({ title, modalName }));
    }

    const closeModal = () => {
        dispatch(closeModalAction());
    }

    return {
        attributes: {
            isOpen,
            modalTitle,
            modalName,
        },

        actions: {
            openModal,
            closeModal
        }
    }
}
import { useReducer } from 'react';
import { initialModalState, modalReducer } from '../bottomSheetReducer';

export const useBottomSheet = () => {
  const [{ isBirthModalOpen, isNicknameModalOpen }, dispatch] = useReducer(
    modalReducer,
    initialModalState,
  );

  const handleOpenNicknameModal = () => {
    dispatch({ type: 'OPEN_NICKNAME_MODAL' });
  };

  const handleOpenBirthModal = () => {
    dispatch({ type: 'OPEN_BIRTH_MODAL' });
  };

  const handleCloseAllModals = () => {
    dispatch({ type: 'CLOSE_ALL_MODALS' });
  };

  return {
    isBirthModalOpen,
    isNicknameModalOpen,
    handleOpenNicknameModal,
    handleOpenBirthModal,
    handleCloseAllModals,
  };
};

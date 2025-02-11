export type ModalState = {
  isNicknameModalOpen: boolean;
  isBirthModalOpen: boolean;
};

export type ModalAction =
  | { type: 'OPEN_NICKNAME_MODAL' }
  | { type: 'CLOSE_NICKNAME_MODAL' }
  | { type: 'OPEN_BIRTH_MODAL' }
  | { type: 'CLOSE_BIRTH_MODAL' }
  | { type: 'CLOSE_ALL_MODALS' };

export const initialModalState: ModalState = {
  isNicknameModalOpen: false,
  isBirthModalOpen: false,
};

export const modalReducer = (
  state: ModalState,
  action: ModalAction,
): ModalState => {
  switch (action.type) {
    case 'OPEN_NICKNAME_MODAL':
      return {
        ...state,
        isNicknameModalOpen: true,
      };
    case 'CLOSE_NICKNAME_MODAL':
      return {
        ...state,
        isNicknameModalOpen: false,
      };
    case 'OPEN_BIRTH_MODAL':
      return {
        ...state,
        isBirthModalOpen: true,
      };
    case 'CLOSE_BIRTH_MODAL':
      return {
        ...state,
        isBirthModalOpen: false,
      };
    case 'CLOSE_ALL_MODALS':
      return {
        isNicknameModalOpen: false,
        isBirthModalOpen: false,
      };
    default:
      return state;
  }
};

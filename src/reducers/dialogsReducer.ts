import { dialogsTypes } from '../actions/types';

type InitialStateType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  currentId: null | number;
  showModal: boolean;
  currentUser: NewDialogUserType | null,
  isLoading: boolean;
  showSendMessageSuccessModal: boolean;
};

const initialState: InitialStateType = {
  dialogs: [],
  messages: [],
  currentId: null,
  showModal: false,
  currentUser: null,
  isLoading: false,
  showSendMessageSuccessModal: false,
};

export const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case dialogsTypes.TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case dialogsTypes.GET_DIALOGS_SUCCESS:
      return {
        ...state,
        dialogs: action.payload,
      };
    case dialogsTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
      };
    case dialogsTypes.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case dialogsTypes.SET_CURRENT_ID: {
      return {
        ...state,
        currentId: action.payload,
      };
    }
    case dialogsTypes.TOGGLE_SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case dialogsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case dialogsTypes.TOGGLE_SHOW_SENT_MESSAGE_SUCCESS_MODAL:
      return {
        ...state,
        showSendMessageSuccessModal: action.payload,
      };
    default:
      return state;
  }
};

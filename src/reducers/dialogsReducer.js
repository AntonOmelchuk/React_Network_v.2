import {dialogsTypes} from '../actions/types';

const initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null,
    isLoading: null,
    currentId: null
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case dialogsTypes.TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case dialogsTypes.GET_DIALOGS_SUCCESS:
            return {
                ...state,
                dialogs: action.payload
            };
        case dialogsTypes.GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.payload
            };
        case dialogsTypes.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case dialogsTypes.SET_CURRENT_ID: {
            return {
                ...state,
                currentId: action.payload
            };
        }
        default:
            return state;
    }
};
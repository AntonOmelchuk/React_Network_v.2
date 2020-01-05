import {
    GET_DIALOGS_SUCCESS,
    GET_MESSAGES_SUCCESS,
    SEND_MESSAGE_SUCCESS,
    SET_CURRENT_ID,
    TOGGLE_IS_LOADING
} from '../actions/types';

const initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null,
    isLoading: null,
    currentId: null
};

export const dialogsServerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case GET_DIALOGS_SUCCESS:
            return {
                ...state,
                dialogs: action.payload
            };
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.payload
            };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case SET_CURRENT_ID: {
            return {
                ...state,
                currentId: action.payload
            };
        }
        default:
            return state;
    }
};
import {dialogsTypes} from '../actions/types';

const initialState = {
    dialogs: [],
    messages: [],
    currentId: null,
    showModal: false,
    currentUser: []
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
        case dialogsTypes.TOGGLE_SHOW_MODAL:
            return {
                ...state,
                showModal: !state.showModal
            };
        case dialogsTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};
import {GET_DIALOGS_SUCCESS, GET_MESSAGES_SUCCESS, TOGGLE_IS_LOADING} from '../actions/types';

const initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null,
    isLoading: null
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
        default:
            return state;
    }
};
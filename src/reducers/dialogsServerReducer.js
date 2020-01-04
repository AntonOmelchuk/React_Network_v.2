import {GET_DIALOGS_SUCCESS, TOGGLE_IS_LOADING} from '../actions/types';

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
                isLoading: !state.isLoading
            };
        case GET_DIALOGS_SUCCESS:
            return {
                ...state,
                dialogs: action.payload
            };
        default:
            return state;
    }
};
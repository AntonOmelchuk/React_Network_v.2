import {SET_AUTH} from '../actions/types';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        default:
            return state
    }
};
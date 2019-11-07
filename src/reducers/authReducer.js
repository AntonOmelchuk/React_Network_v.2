import {SET_AUTH, LOGOUT} from '../actions/types';

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
        case LOGOUT:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false
            };
        default:
            return state
    }
};
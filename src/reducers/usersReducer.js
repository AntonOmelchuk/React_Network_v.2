import {GET_USERS, TOGGLE_FOLLOWING} from '../actions/types';

const initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload) {
                        return {...user, followed: !user.followed}
                    } else {
                        return user
                    }
                })
            };
        default:
            return state
    }
};
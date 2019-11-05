import {DISABLE_BUTTON, GET_USERS, SET_CURRENT_PAGE, TOGGLE_FETCHING, TOGGLE_FOLLOWING} from '../actions/types';

const initialState = {
    users: [],
    totalCount: null,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    disabledButton: []
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload.users,
                totalCount: action.payload.totalCount,
                isFetching: false
            };
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
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
        case DISABLE_BUTTON:
            return {
                ...state,
                disabledButton: action.payload.status
                    ? [...state.disabledButton, action.payload.id]
                    : [state.disabledButton.filter(id => id !== action.payload.id)]
            };
        default:
            return state
    }
};
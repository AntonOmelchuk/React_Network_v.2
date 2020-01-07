import {usersTypes} from '../actions/types';

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
        case usersTypes.GET_USERS:
            return {
                ...state,
                users: action.payload.users,
                totalCount: action.payload.totalCount,
                isFetching: false
            };
        case usersTypes.TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case usersTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        case usersTypes.TOGGLE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload) {
                        return {...user, followed: !user.followed};
                    } else {
                        return user;
                    }
                })
            };
        case usersTypes.DISABLE_BUTTON:
            return {
                ...state,
                disabledButton: action.payload.status
                    ? [...state.disabledButton, action.payload.id]
                    : [state.disabledButton.filter(id => id !== action.payload.id)]
            };
        default:
            return state;
    }
};
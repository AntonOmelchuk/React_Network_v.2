import {usersTypes} from './types';
import {usersAPI} from '../api/api';

export const getUsers = page => async dispatch => {
    try {
        const response = await usersAPI.getUser(page);

        dispatch({type: usersTypes.GET_USERS, payload: {
            users: response.data.items,
            totalCount: response.data.totalCount
        }});
    } catch(err) {
        console.log(err);
    }
};

export const toggleFetching = value => ({type: usersTypes.TOGGLE_FETCHING, payload: value});

export const setCurrentPage = page => ({type: usersTypes.SET_CURRENT_PAGE, payload: page});

export const followUser = id => async dispatch => {
    try {
        dispatch({type: usersTypes.DISABLE_BUTTON, payload: {
            id,
            status: true
        }});
        const response = await usersAPI.followUser(id);

        if(response.data.resultCode === 0) {
            dispatch({type: usersTypes.TOGGLE_FOLLOWING, payload: id});
            dispatch({type: usersTypes.DISABLE_BUTTON, payload: {
                id,
                status: false
            }});
        }
    } catch(err) {
        console.log(err);
    }
};

export const unFollowUser = id => async dispatch => {
    try {
        dispatch({type: usersTypes.DISABLE_BUTTON, payload: {
            id,
            status: true
        }});
        const response = await usersAPI.unFollowUser(id);

        if(response.data.resultCode === 0) {
            dispatch({type: usersTypes.TOGGLE_FOLLOWING, payload: id});
            dispatch({type: usersTypes.DISABLE_BUTTON, payload: {
                id,
                status: false
            }});
        }
    } catch(err) {

    }
};

import {DISABLE_BUTTON, GET_USERS, SET_CURRENT_PAGE, TOGGLE_FETCHING, TOGGLE_FOLLOWING} from './types';
import {usersAPI} from '../api/api';

export const getUsers = page => async dispatch => {
    try {
        const response = await usersAPI.getUser(page);

        dispatch({type: GET_USERS, payload: {
            users: response.data.items,
            totalCount: response.data.totalCount
        }});
    } catch(err) {

    }
};

export const toggleFetching = value => ({type: TOGGLE_FETCHING, payload: value});

export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, payload: page});

export const followUser = id => async dispatch => {
    try {
        dispatch({type: DISABLE_BUTTON, payload: {
            id,
            status: true
        }});
        const response = await usersAPI.followUser(id);

        if(response.data.resultCode === 0) {
            dispatch({type: TOGGLE_FOLLOWING, payload: id});
            dispatch({type: DISABLE_BUTTON, payload: {
                id,
                status: false
            }});
        }
    } catch(err) {

    }
};

export const unFollowUser = id => async dispatch => {
    try {
        dispatch({type: DISABLE_BUTTON, payload: {
            id,
            status: true
        }});
        const response = await usersAPI.unFollowUser(id);

        if(response.data.resultCode === 0) {
            dispatch({type: TOGGLE_FOLLOWING, payload: id});
            dispatch({type: DISABLE_BUTTON, payload: {
                id,
                status: false
            }});
        }
    } catch(err) {

    }
};






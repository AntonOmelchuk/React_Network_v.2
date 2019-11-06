import {ADD_POST, DELETE_POST, GET_STATUS, SET_PROFILE, TOGGLE_LIKED, TOGGLE_PROFILE_FETCHING} from './types';
import {profileAPI} from '../api/api';

export const setProfile = id => async dispatch => {
    try {
        toggleFetching();
        const response = await profileAPI.serProfile(id);
        dispatch(getStatus(id));
        dispatch({type: SET_PROFILE, payload: response.data});
        toggleFetching();
    } catch(err) {

    }
};

export const getStatus = id => async dispatch => {
    try {
        const response = await profileAPI.getStatus(id);
        dispatch({type: GET_STATUS, payload: response.data})
    } catch(err) {

    }
};

export const addPost = post => ({type: ADD_POST, payload: post});

export const deletePost = id => ({type: DELETE_POST, payload: id});

export const toggleLiked = id => ({type: TOGGLE_LIKED, payload: id});

export const toggleFetching = () => ({type: TOGGLE_PROFILE_FETCHING});


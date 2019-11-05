import {ADD_POST, DELETE_POST, SET_PROFILE, TOGGLE_LIKED} from './types';
import {profileAPI} from '../api/api';

export const setProfile = id => async dispatch => {
    try {
        const response = await profileAPI.serProfile(id);

        dispatch({type: SET_PROFILE, payload: response.data})
    } catch(err) {

    }
};

export const addPost = post => ({type: ADD_POST, payload: post});

export const deletePost = id => ({type: DELETE_POST, payload: id});

export const toggleLiked = id => ({type: TOGGLE_LIKED, payload: id});

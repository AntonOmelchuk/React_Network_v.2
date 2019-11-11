import {
    ADD_POST,
    DELETE_POST,
    GET_STATUS, SET_PHOTO,
    SET_PROFILE,
    TOGGLE_LIKED,
    TOGGLE_PROFILE_FETCHING,
    UPDATE_STATUS
} from './types';
import {profileAPI} from '../api/api';

export const setProfile = id => async dispatch => {
    try {
        dispatch(toggleFetching());
        const response = await profileAPI.serProfile(id);
        dispatch({type: SET_PROFILE, payload: response.data});
        dispatch(toggleFetching());
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

export const updateStatus = status => async dispatch => {
    try {
        await profileAPI.updateStatus(status);
        dispatch({type: UPDATE_STATUS, payload: status})
    } catch(err) {

    }
};

export const addPost = post => ({type: ADD_POST, payload: post});

export const deletePost = id => ({type: DELETE_POST, payload: id});

export const toggleLiked = id => ({type: TOGGLE_LIKED, payload: id});

export const toggleFetching = () => ({type: TOGGLE_PROFILE_FETCHING});

export const setPhoto = photo => ({type: SET_PHOTO, payload: photo});

export const updatePhoto = photo => async dispatch => {
    try {
        const response = await profileAPI.updatePhoto(photo);

        if(response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos))
        }
    } catch(err) {

    }
};

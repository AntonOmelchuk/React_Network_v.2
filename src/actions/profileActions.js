import {profileTypes} from './types';
import {profileAPI} from '../api/api';

export const setProfile = id => async dispatch => {
    try {
        dispatch(toggleFetching());
        const response = await profileAPI.serProfile(id);
        dispatch({type: profileTypes.SET_PROFILE, payload: response.data});
        dispatch(toggleFetching());
    } catch(err) {

    }
};

export const getStatus = id => async dispatch => {
    try {
        const response = await profileAPI.getStatus(id);
        dispatch({type: profileTypes.GET_STATUS, payload: response.data});
    } catch(err) {

    }
};

export const updateStatus = status => async dispatch => {
    try {
        await profileAPI.updateStatus(status);
        dispatch({type: profileTypes.UPDATE_STATUS, payload: status});
    } catch(err) {

    }
};

export const addPost = post => ({type: profileTypes.ADD_POST, payload: post});

export const deletePost = id => ({type: profileTypes.DELETE_POST, payload: id});

export const toggleLiked = id => ({type: profileTypes.TOGGLE_LIKED, payload: id});

export const toggleFetching = () => ({type: profileTypes.TOGGLE_PROFILE_FETCHING});

export const setPhoto = photo => ({type: profileTypes.SET_PHOTO, payload: photo});

export const updatePhoto = photo => async dispatch => {
    try {
        const response = await profileAPI.updatePhoto(photo);

        if(response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos));
        }
    } catch(err) {

    }
};

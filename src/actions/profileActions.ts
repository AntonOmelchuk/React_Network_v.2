import {
    AddPostActionType,
    DeletePostActionType,
    profileTypes, SetPhotoActionType,
    ToggleFetchingActionType,
    ToggleLikedActionType
} from './types';
import {profileAPI} from '../api/api';

export const setProfile = (id: number) => async (dispatch: any) => {
    try {
        dispatch(toggleFetching());
        const response = await profileAPI.serProfile(id);
        dispatch({type: profileTypes.SET_PROFILE, payload: response.data});
        dispatch(toggleFetching());
    } catch(err) {

    }
};

export const getStatus = (id: number) => async (dispatch: any) => {
    try {
        const response = await profileAPI.getStatus(id);
        dispatch({type: profileTypes.GET_STATUS, payload: response.data});
    } catch(err) {

    }
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        await profileAPI.updateStatus(status);
        dispatch({type: profileTypes.UPDATE_STATUS, payload: status});
    } catch(err) {

    }
};

export const addPost = (post: PostType): AddPostActionType => ({type: profileTypes.ADD_POST, payload: post});

export const deletePost = (id: number| string): DeletePostActionType => ({type: profileTypes.DELETE_POST, payload: id});

export const toggleLiked = (id: number | string): ToggleLikedActionType => ({type: profileTypes.TOGGLE_LIKED, payload: id});

export const toggleFetching = (): ToggleFetchingActionType => ({type: profileTypes.TOGGLE_PROFILE_FETCHING});

export const setPhoto = (photo: PhotosType): SetPhotoActionType => ({type: profileTypes.SET_PHOTO, payload: photo});

export const updatePhoto = (photo: File) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updatePhoto(photo);

        if(response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos));
        }
    } catch(err) {

    }
};

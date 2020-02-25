import {profileTypes} from './types';
import {profileAPI} from '../api/api';
import {AddPostType, DeletePostType, SetPhotoType, ToggleFetchingType, ToggleLikedType} from './actionCreatorTypes'
import {PostType} from '../../types'

export const setProfile = (id: any) => async (dispatch: any) => {
    try {
        dispatch(toggleFetching())
        const response = await profileAPI.serProfile(id)
        dispatch({type: profileTypes.SET_PROFILE, payload: response.data})
        dispatch(toggleFetching())
    } catch(err) {
        console.log(err)
    }
}

export const getStatus = (id: number) => async (dispatch: any) => {
    try {
        const response = await profileAPI.getStatus(id)
        dispatch({type: profileTypes.GET_STATUS, payload: response.data})
    } catch(err) {
         console.log(err)
    }
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        await profileAPI.updateStatus(status)
        dispatch({type: profileTypes.UPDATE_STATUS, payload: status})
    } catch(err) {
        console.log(err)
    }
}

export const addPost = (post: PostType): AddPostType => ({type: profileTypes.ADD_POST, payload: post})

export const deletePost = (id: number): DeletePostType => ({type: profileTypes.DELETE_POST, payload: id})

export const toggleLiked = (id: number): ToggleLikedType => ({type: profileTypes.TOGGLE_LIKED, payload: id})

export const toggleFetching = (): ToggleFetchingType => ({type: profileTypes.TOGGLE_PROFILE_FETCHING})

export const setPhoto = (photo: any): SetPhotoType => ({type: profileTypes.SET_PHOTO, payload: photo})

export const updatePhoto = (photo: File) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updatePhoto(photo)

        if(response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos))
        }
    } catch(err) {
        console.log(err)
    }
}

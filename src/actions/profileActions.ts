import {
  AddPostActionType,
  DeletePostActionType,
  ProfileThunksType,
  profileTypes,
  SetPhotoActionType,
  ToggleFetchingActionType,
  ToggleLikedActionType
} from "./types";
import { profileAPI } from "../api/api";
import { ResultCodeEnum } from "../api/types";

export const setProfile = (id: number): ProfileThunksType => async dispatch => {
  try {
    dispatch(toggleFetching());
    const response = await profileAPI.serProfile(id);
    dispatch({ type: profileTypes.SET_PROFILE, payload: response });
    dispatch(toggleFetching());
  } catch (err) {
    console.log(err)
  }
};

export const getStatus = (id: number): ProfileThunksType => async dispatch => {
  try {
    const response = await profileAPI.getStatus(id);
    dispatch({ type: profileTypes.GET_STATUS, payload: response });
  } catch (err) {
    console.log(err)
  }
};

export const updateStatus = (status: string): ProfileThunksType => async dispatch => {
  try {
    const response = await profileAPI.updateStatus(status);

    if(response.resultCode === ResultCodeEnum.Success) {
      dispatch({ type: profileTypes.UPDATE_STATUS, payload: status })
    }
  } catch (err) {
    console.log(err)
  }
};

export const addPost = (post: PostType): AddPostActionType => ({
  type: profileTypes.ADD_POST,
  payload: post,
});

export const deletePost = (id: number | string): DeletePostActionType => ({
  type: profileTypes.DELETE_POST,
  payload: id,
});

export const toggleLiked = (id: number | string): ToggleLikedActionType => ({
  type: profileTypes.TOGGLE_LIKED,
  payload: id,
});

export const toggleFetching = (): ToggleFetchingActionType => ({
  type: profileTypes.TOGGLE_PROFILE_FETCHING,
});

export const setPhoto = (photo: PhotosType): SetPhotoActionType => ({
  type: profileTypes.SET_PHOTO,
  payload: photo,
});

export const updatePhoto = (photo: File): ProfileThunksType => async dispatch => {
  try {
    const response = await profileAPI.updatePhoto(photo);

    if (response.resultCode === ResultCodeEnum.Success) {
      dispatch(setPhoto(response.data.photos));
    }
  } catch (err) {
    console.log(err)
  }
};

import {AppStateType} from '../reducers'

export const getPosts = (state: AppStateType) => state.profile.posts;
export const getProfile = (state: AppStateType) => state.profile.profile;
export const getIsFetching = (state: AppStateType) => state.profile.isFetching;
export const getStateStatus = (state: AppStateType) => state.profile.status;
export const getAuth = (state: AppStateType) => state.auth.isAuth;
export const getId = (state: AppStateType) => state.auth.id;

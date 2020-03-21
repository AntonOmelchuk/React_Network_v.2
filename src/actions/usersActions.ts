import {SetCurrentPageActionType, UsersToggleFetchingActionType, usersTypes} from './types';
import {usersAPI} from '../api/api';

export const getUsers = (page: number) => async (dispatch: any) => {
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

export const toggleFetching = (value: boolean): UsersToggleFetchingActionType => ({type: usersTypes.TOGGLE_FETCHING, payload: value});

export const setCurrentPage = (page: number): SetCurrentPageActionType => ({type: usersTypes.SET_CURRENT_PAGE, payload: page});

export const followUser = (id: number) => async (dispatch: any) => {
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

export const unFollowUser = (id: number) => async (dispatch: any) => {
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
        console.log(err)
    }
};

import {authTypes} from './types';
import {authAPI} from '../api/api';

export const setAuth = () => async (dispatch: any) => {
    try {
        const response = await authAPI.setAuth()

        if(response.data.resultCode === 0) {
            dispatch({
                type: authTypes.SET_AUTH,
                payload: response.data.data
            })
        }
    } catch(err) {
        console.log(err)
    }
}

export const login = (email: string, password: number, rememberMe: boolean) => async (dispatch: any) => {
    try {
        await authAPI.login(email, password, rememberMe);

        dispatch(setAuth());
    } catch(err) {
        console.log(err)
    }
}

export const logout = () => async (dispatch: any) => {
    try {
        await authAPI.logout()

        dispatch({type: authTypes.LOGOUT})
    } catch(err) {
        console.log(err)
    }
}
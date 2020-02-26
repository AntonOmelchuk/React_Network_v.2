import {authTypes} from './types';
import {authAPI} from '../api/api';
import {AuthThunkActionsType} from './actionCreatorTypes'

export const setAuth = (): AuthThunkActionsType => {
    return async (dispatch) => {
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
}

export const login = (email: string, password: number, rememberMe: boolean): AuthThunkActionsType => {
    return async (dispatch) => {
        try {
            await authAPI.login(email, password, rememberMe);

            dispatch(setAuth());
        } catch (err) {
            console.log(err)
        }
    }
}

export const logout = (): AuthThunkActionsType => async (dispatch) => {
    try {
        await authAPI.logout()

        dispatch({type: authTypes.LOGOUT})
    } catch(err) {
        console.log(err)
    }
}

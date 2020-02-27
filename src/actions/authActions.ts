import {authTypes} from './types';
import {authAPI, ResultCodeEnum} from '../api/api'
import {AuthThunkActionsType} from './actionCreatorTypes'

export const setAuth = (): AuthThunkActionsType => {
    return async (dispatch) => {
        try {
            const responseData = await authAPI.setAuth()

            if(responseData.resultCode === ResultCodeEnum.Success) {
                dispatch({
                    type: authTypes.SET_AUTH,
                    payload: responseData.data
                })
            }
        } catch(err) {
            console.log(err)
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AuthThunkActionsType => {
    return async dispatch => {
        try {
            await authAPI.login(email, password, rememberMe);

            await dispatch(setAuth());
        } catch (err) {
            console.log(err)
        }
    }
}

export const logout = (): AuthThunkActionsType => async dispatch => {
    try {
        await authAPI.logout()

        dispatch({type: authTypes.LOGOUT})
    } catch(err) {
        console.log(err)
    }
}

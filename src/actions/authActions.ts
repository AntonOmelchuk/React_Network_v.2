import { AuthThunksTypes, authTypes, LogoutSuccessType } from './types';
import { authAPI } from '../api/api';

export const setAuth = (): AuthThunksTypes => async dispatch => {
  try {
    const response = await authAPI.setAuth();

    if (response.data.resultCode === 0) {
      dispatch({
        type: authTypes.SET_AUTH,
        payload: response.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean
): AuthThunksTypes => async dispatch => {
  try {
    await authAPI.login(email, password, rememberMe);

    dispatch(setAuth());
  } catch (err) {}
};

const logoutSuccess = (): LogoutSuccessType => ({ type: authTypes.LOGOUT });

export const logout = (): AuthThunksTypes => async dispatch => {
  try {
    await authAPI.logout();

    dispatch(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
};

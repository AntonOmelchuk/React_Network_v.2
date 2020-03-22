import { AuthThunksTypes, authTypes, LogoutSuccessType } from "./types";
import { authAPI } from "../api/api";
import { ResultCodeEnum } from "../api/types";

export const setAuth = (): AuthThunksTypes => async dispatch => {
  try {
    const response = await authAPI.setAuth();

    if (response.resultCode === ResultCodeEnum.Success) {
      dispatch({
        type: authTypes.SET_AUTH,
        payload: response.data,
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
    const response = await authAPI.login(email, password, rememberMe);

    if(response.resultCode === ResultCodeEnum.Success) {
      dispatch(setAuth());
    }
  } catch (err) {
    console.log(err)
  }
};

const logoutSuccess = (): LogoutSuccessType => ({ type: authTypes.LOGOUT });

export const logout = (): AuthThunksTypes => async dispatch => {
  try {
    const response = await authAPI.logout();

    if(response.resultCode === ResultCodeEnum.Success) {
      dispatch(logoutSuccess())
    }
  } catch (err) {
    console.log(err);
  }
};

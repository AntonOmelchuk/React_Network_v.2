import { authTypes } from '../actions/types';

type InitialStateType = {
  id: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;
};

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case authTypes.SET_AUTH:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case authTypes.LOGOUT:
      return {
        ...state,
        id: null,
        email: null,
        login: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

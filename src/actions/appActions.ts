import { AppInitializedThunksTypes, INITIALIZED_SUCCESS, InitializedSuccessActionType } from "./types";
import { setAuth } from './authActions';

export const initialized = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = (): AppInitializedThunksTypes => async dispatch => {
  try {
    await dispatch(setAuth());

    dispatch(initialized());
  } catch (err) {}
};

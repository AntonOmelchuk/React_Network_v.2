// === App types === //

import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../reducers';

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

export type AppInitializedActionsTypes = InitializedSuccessActionType;

export type AppInitializedThunksTypes = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  AppInitializedActionsTypes
>;

// === Profile types === //

export const profileTypes = {
  SET_PROFILE: 'SET_PROFILE',
  ADD_POST: 'ADD_POST',
  DELETE_POST: 'DELETE_POST',
  TOGGLE_LIKED: 'TOGGLE_LIKED',
  GET_STATUS: 'GET_STATUS',
  UPDATE_STATUS: 'UPDATE_STATUS',
  TOGGLE_PROFILE_FETCHING: 'TOGGLE_PROFILE_FETCHING',
  SET_PHOTO: 'SET_PHOTO',
};

export type AddPostActionType = {
  type: typeof profileTypes.ADD_POST;
  payload: PostType;
};

export type DeletePostActionType = {
  type: typeof profileTypes.DELETE_POST;
  payload: number | string;
};

export type ToggleLikedActionType = {
  type: typeof profileTypes.TOGGLE_LIKED;
  payload: number | string;
};

export type ToggleFetchingActionType = {
  type: typeof profileTypes.TOGGLE_PROFILE_FETCHING;
};

export type SetPhotoActionType = {
  type: typeof profileTypes.SET_PHOTO;
  payload: PhotosType;
};

export type ProfileActionsTypes =
  | AddPostActionType
  | DeletePostActionType
  | ToggleLikedActionType
  | ToggleFetchingActionType
  | SetPhotoActionType;

export type ProfileThunksType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ProfileActionsTypes
  >;

// === Dialogs types === //

export const dialogsTypes = {
  SEND_MESSAGE_SUCCESS: 'SEND_MESSAGE_SUCCESS',
  GET_DIALOGS_SUCCESS: 'GET_DIALOGS_SUCCESS',
  GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
  TOGGLE_IS_LOADING: 'TOGGLE_IS_LOADING',
  SET_CURRENT_ID: 'SET_CURRENT_ID',
  TOGGLE_SHOW_MODAL: 'TOGGLE_SHOW_MODAL',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  TOGGLE_SHOW_SENT_MESSAGE_SUCCESS_MODAL:
    'TOGGLE_SHOW_SENT_MESSAGE_SUCCESS_MODAL',
  DELETE_MESSAGES: 'DELETE_MESSAGES',
};

export type ToggleIsLoadingActionType = {
  type: typeof dialogsTypes.TOGGLE_IS_LOADING;
  payload: boolean;
};

export type SetCurrentIdActionType = {
  type: typeof dialogsTypes.SET_CURRENT_ID;
  payload: number;
};

export type GetDialogsSuccessActionType = {
  type: typeof dialogsTypes.GET_DIALOGS_SUCCESS;
  payload: Array<DialogType>;
};

export type SendMessageSuccessActionType = {
  type: typeof dialogsTypes.SEND_MESSAGE_SUCCESS;
  payload: MessageType;
};

export type GetMessageSuccessActionType = {
  type: typeof dialogsTypes.GET_MESSAGES_SUCCESS;
  payload: Array<MessageType>;
};

export type ToggleShowModalActionType = {
  type: typeof dialogsTypes.TOGGLE_SHOW_MODAL;
  payload: boolean;
};

export type SetCurrentUserActionType = {
  type: typeof dialogsTypes.SET_CURRENT_USER;
  payload: NewDialogUserType;
};

export type ToggleShowSendMessageSuccessModalActionType = {
  type: typeof dialogsTypes.TOGGLE_SHOW_SENT_MESSAGE_SUCCESS_MODAL;
  payload: boolean;
};

export type DialogsActionsTypes =
  | ToggleIsLoadingActionType
  | SetCurrentIdActionType
  | GetDialogsSuccessActionType
  | SendMessageSuccessActionType
  | GetMessageSuccessActionType
  | ToggleShowModalActionType
  | SetCurrentUserActionType
  | ToggleShowSendMessageSuccessModalActionType;

export type DialogsThunksTypes = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  DialogsActionsTypes
>;

// === Users types === //

export const usersTypes = {
  GET_USERS: 'GET_USERS',
  TOGGLE_FOLLOWING: 'TOGGLE_FOLLOWING',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  TOGGLE_FETCHING: 'TOGGLE_FETCHING',
  TOGGLE_DISABLE_BUTTON: 'TOGGLE_DISABLE_BUTTON',
};

export type ToggleDisableButtonType = {
  type: typeof usersTypes.TOGGLE_DISABLE_BUTTON;
  payload: {
    id: number;
    status: boolean;
  };
};

export type GetUsersSuccessType = {
  type: typeof usersTypes.GET_USERS;
  payload: {
    users: Array<UserType>;
    totalCount: number;
  };
};

export type UsersToggleFetchingActionType = {
  type: typeof usersTypes.TOGGLE_FETCHING;
  payload: boolean;
};

export type SetCurrentPageActionType = {
  type: typeof usersTypes.SET_CURRENT_PAGE;
  payload: number;
};

export type UsersActionTypes =
  | ToggleDisableButtonType
  | GetUsersSuccessType
  | UsersToggleFetchingActionType
  | SetCurrentPageActionType;

export type UsersThunksTypes = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  UsersActionTypes
>;
// === Auth types === //

export const authTypes = {
  SET_AUTH: 'SET_AUTH',
  LOGOUT: 'LOGOUT',
};

export type SetAuthActionType = {
  type: typeof authTypes.SET_AUTH;
  payload: any;
};

export type LogoutSuccessType = {
  type: typeof authTypes.LOGOUT;
};

export type AuthActionsTypes = SetAuthActionType | LogoutSuccessType;

export type AuthThunksTypes = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  AuthActionsTypes
>;

export type ActionsTypes =
  | AppInitializedActionsTypes
  | ProfileActionsTypes
  | DialogsActionsTypes
  | UsersActionTypes
  | AuthActionsTypes;

import {authTypes, dialogsTypes, INITIALIZED_SUCCESS, profileTypes, usersTypes} from './types'
import {UserType} from '../../types'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from '../reducers'

// === Auth types === //

export type SetAuthType = {
  type: typeof authTypes.SET_AUTH,
  payload: {
    id: number,
    email: string,
    login: string
  }
}

export type LogoutType = {
  type: typeof authTypes.LOGOUT,
  payload?: any                 // should fix
}

export type AuthActionsType = SetAuthType | LogoutType
export type AuthThunkActionsType = ThunkAction<Promise<void>, AppStateType, unknown, AuthActionsType>

// === Profile types === //

export type SetProfileType = {
  type: typeof profileTypes.SET_PROFILE,
  payload: UserType
}

export type GetStatusType = {
  type: typeof profileTypes.GET_STATUS,
  payload: string
}

export type UpdateStatusType = {
  type: typeof profileTypes.UPDATE_STATUS,
  payload: string
}

export type AddPostType = {
  type: typeof profileTypes.ADD_POST,
  payload: string
}

export type DeletePostType = {
  type: typeof profileTypes.DELETE_POST,
  payload: number
}

export type ToggleLikedType = {
  type: typeof profileTypes.TOGGLE_LIKED,
  payload: number
}

export type ToggleFetchingType = {
  type: typeof profileTypes.TOGGLE_PROFILE_FETCHING
}

export type SetPhotoType = {
  type: typeof profileTypes.SET_PHOTO,
  payload: any
}

export type ProfileActionsType = SetProfileType | GetStatusType | UpdateStatusType
                                  | AddPostType | DeletePostType | ToggleLikedType
                                  | ToggleFetchingType | SetPhotoType

// === App types === //

export type InitializedType = {
  type: typeof INITIALIZED_SUCCESS
}

export type AppActionsType = InitializedType
export type AppThunkActionsType = ThunkAction<Promise<void>, AppStateType, unknown, AppActionsType>

// === Dialogs types === //

export type ToggleIsLoadingType = {
  type: typeof dialogsTypes.TOGGLE_IS_LOADING,
  payload: boolean
}

export type SetCurrentIdType = {
  type: typeof dialogsTypes.SET_CURRENT_ID,
  payload: number
}

export type GetDialogsSuccessType = {
  type: typeof dialogsTypes.GET_DIALOGS_SUCCESS,
  payload: object
}

export type GetMessagesSuccessType = {
  type: typeof dialogsTypes.GET_MESSAGES_SUCCESS,
  payload: object
}

export type SendMessageSuccessType = {
  type: typeof dialogsTypes.SEND_MESSAGE_SUCCESS,
  payload: string
}

export type ToggleShowModal = {
  type: typeof dialogsTypes.TOGGLE_SHOW_MODAL,
  payload?: any
}

export type SetCurrentUser = {
  type: typeof dialogsTypes.SET_CURRENT_USER,
  payload: object
}

export type ShowSendMessageSuccessModal = {
  type: typeof dialogsTypes.SHOW_SENT_MESSAGE_SUCCESS_MODAL,
  payload?: any
}

export type HideSendMessageSuccessModal = {
  type: typeof dialogsTypes.HIDE_SENT_MESSAGE_SUCCESS_MODAL,
  payload?: any
}

export type DialogsActionsType = ToggleIsLoadingType | SetCurrentIdType |
  GetDialogsSuccessType | GetMessagesSuccessType | SendMessageSuccessType |
  ToggleShowModal | SetCurrentUser | ShowSendMessageSuccessModal |
  HideSendMessageSuccessModal

export type DialogsThunkActionsType = ThunkAction<Promise<void>, AppStateType, unknown, DialogsActionsType>

// === Users types === //

export type GetUsersType = {
  type: typeof usersTypes.GET_USERS,
  payload: {
    users: Array<UserType>,
    totalCount: number
  }
}

export type FollowUnfollowUserType = {
  type: typeof usersTypes.TOGGLE_FETCHING |
        typeof usersTypes.DISABLE_BUTTON,
  payload: {
    id: number,
    status?: boolean
  }
}

export type UserToggleFetchingType = {
  type: typeof usersTypes.TOGGLE_FETCHING
}

export type SetCurrentPageType = {
  type: typeof usersTypes.SET_CURRENT_PAGE,
  payload: number
}

export type UsersActionsType = GetUsersType & FollowUnfollowUserType & UserToggleFetchingType & SetCurrentPageType
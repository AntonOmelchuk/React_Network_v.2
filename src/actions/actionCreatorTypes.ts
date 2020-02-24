import {dialogsTypes, INITIALIZED_SUCCESS, profileTypes, usersTypes} from './types'

// Profile types

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

// App types

export type InitializedType = {
  type: typeof INITIALIZED_SUCCESS
}

// Dialogs types

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
  type: typeof dialogsTypes.TOGGLE_SHOW_MODAL
}

export type SetCurrentUser = {
  type: typeof dialogsTypes.SET_CURRENT_USER,
  payload: object
}

export type ShowSendMessageSuccessModal = {
  type: typeof dialogsTypes.SHOW_SENT_MESSAGE_SUCCESS_MODAL
}

export type HideSendMessageSuccessModal = {
  type: typeof dialogsTypes.HIDE_SENT_MESSAGE_SUCCESS_MODAL
}

// Users types

export type UserToggleFetchingType = {
  type: typeof usersTypes.TOGGLE_FETCHING
}

export type SetCurrentPageType = {
  type: typeof usersTypes.SET_CURRENT_PAGE,
  payload: number
}

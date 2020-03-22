export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

// === Profile API === //

export type SetProfileType = {
  profile: ProfileType
}

export type GetStatusType = {
  data: string
}

export type UpdateStatusType = {
  resultCode: ResultCodeEnum,
  messages: Array<string>,
  data: {}
}

export type UpdatePhotoType = {
  resultCode: ResultCodeEnum,
  messages: Array<string>,
  data: {
    photos: PhotosType
  }
}

// === User API === //

export type GetUserType = {
  items: Array<UserType>,
  totalCount?: number | undefined,
  error?: string | null
}

export type FollowUserType = {
  resultCode: ResultCodeEnum,
  messages: Array<string>,
  data: {}
}

export type UnFollowUserType = {
  resultCode: ResultCodeEnum,
  messages: Array<string>,
  data: {}
}

// === Auth API === //

export type SetAuthType = {
  data: {
    id: number,
    email: string,
    login: string
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
}

export type LoginType = {
  resultCode: ResultCodeEnum,
  messages: Array<string>,
  data: {
    userId: number
  }
}

export type LogoutType = {
  resultCode: ResultCodeEnum,
  messages: Array<string>,
  data: {}
}

// === Dialogs API === //

export type SendMessageType = {

}

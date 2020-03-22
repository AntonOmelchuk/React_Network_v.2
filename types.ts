export type UserPhotosType = {
  small: string,
  large: string
}
export type UserType = {
  id: number,
  name: string,
  status?: string,
  photos: UserPhotosType,
  followed: boolean
}

export type PostType = {
  id: string,
  ava: string,
  text: string,
  likes: number,
  date: Date | string,
  liked: boolean
}

export type ProfileType = {
  userId: number,
  photos: UserPhotosType,
  aboutMe: string,
  fullName: string,
  lookingForAJob: boolean,
  lookingForAJobDescription?: string,
  contacts: {
    github?: string,
    instagram?: string,
    vk?: string,
    twitter?: string,
    website?: string,
    youtube?: string,
    mainLink?: string
  }
}

export type DialogType = {
  id: number,
  photos: UserPhotosType,
  lastUserActivityDate: Date,
  userName: string
}

export type MessageType = {
  id: number,
  senderName: string,
  addedAt: string,
  body: string
}

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
  date: Date,
  liked: boolean
}

export type ProfileType = {
  userId: number,
  photos: UserPhotosType,
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

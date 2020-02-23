export type UserPhotos = {
  small: string,
  large: string
}
export type User = {
  id: number,
  name: string,
  status?: string,
  photos: UserPhotos,
  followed: boolean
}
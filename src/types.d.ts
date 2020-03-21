type PhotosType = {
    small: string | null
    large: string | null
}
type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}

type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

type PostType = {
    id: number
    ava: string
    text: string
    likes: number
    date: string | Date
    liked: boolean
}

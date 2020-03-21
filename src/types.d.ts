// === Profile types === //

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
    id: string | number
    ava: string | any
    text: string
    likes: number
    date: string | Date
    liked: boolean
}

// === Dialogs type === //

type DialogType = {
    id: number
    userName: string
    hasNewMessages: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    photos: PhotosType
}

type MessageType = {
    id: string
    body: string
    translateBody: null | string
    addedAt: string
    senderId: number
    senderName: string
    recipientId: number
    viewed: boolean
}

type NewDialogUserType = {
    status: string
    name: string
    id: number
    photos: PhotosType
}

// === Users type === //

type UserType = {
    id: number
    name: string
    status?: string
    photos: PhotosType
    followed: boolean
}

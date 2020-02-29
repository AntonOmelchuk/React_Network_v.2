import axios from 'axios';
import {DialogType} from '../../types'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cc9f7e6f-c96d-4eb2-97ef-b9ab9495f033'
    }
});

export const profileAPI = {
    serProfile(id: number) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id: number) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },
    updatePhoto(photo: File) {
        const formData = new FormData();
        formData.append('image', photo);

        return instance.put('profile/photo', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    }
};

export const usersAPI = {
    getUser(page: number) {
        return instance.get(`users?page=${page}`);
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`);
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`);
    }
};

export enum ResultCodeEnum  {
    Success,
    Error = 1
}

type SetAuthType = {
    data: {
        id: number,
        email: string,
        login: string
    }
    resultCode: ResultCodeEnum,
    messages:Array<string>
}

type LoginType = {
    data: {
        userId: number
    },
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LogoutType = {
    data: object,
    resultCode: ResultCodeEnum,
    messages: Array<string>
}

export const authAPI = {
    setAuth() {
        return instance.get<SetAuthType>('auth/me').then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginType>('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete<LogoutType>('auth/login');
    }
};

type GetDialogsType = {
    status: number,
    data: Array<DialogType>
}

export const dialogsAPI = {
    getDialogs() {
        return instance.get<GetDialogsType>('dialogs');
    },
    sendMessage(userId: number, message: string) {
        return instance.post(`dialogs/${userId}/messages`, {body: message});
    },
    getMessages(userId: number) {
        return instance.get(`dialogs/${userId}/messages`);
    },
    deleteMessage(messageId: number) {
        return instance.delete(`dialogs/messages/${messageId}`)
            .then(res => res.data);
    }
};

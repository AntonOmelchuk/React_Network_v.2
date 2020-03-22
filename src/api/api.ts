import axios from 'axios';
import {
  FollowUserType,
  GetStatusType,
  LoginType,
  LogoutType,
  SetAuthType,
  SetProfileType,
  UnFollowUserType,
  UpdatePhotoType,
  UpdateStatusType,
} from './types';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'cc9f7e6f-c96d-4eb2-97ef-b9ab9495f033',
  },
});

export const profileAPI = {
  async serProfile(id: number) {
    const res = await instance.get<SetProfileType>(`profile/${id}`);
    return res.data;
  },
  async getStatus(id: number) {
    const res = await instance.get<GetStatusType>(`profile/status/${id}`);
    return res.data;
  },
  async updateStatus(status: string) {
    const res = await instance.put<UpdateStatusType>(`profile/status`, {
      status,
    });
    return res.data;
  },
  async updatePhoto(photo: File) {
    const formData = new FormData();
    formData.append('image', photo);

    const res = await instance.put<UpdatePhotoType>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  },
};

export const usersAPI = {
  getUsers(page: number) {
    return instance.get(`users?page=${page}`).then(res => res.data);
  },
  followUser(id: number) {
    return instance.post<FollowUserType>(`follow/${id}`).then(res => res.data);
  },
  unFollowUser(id: number) {
    return instance
      .delete<UnFollowUserType>(`follow/${id}`)
      .then(res => res.data);
  },
};

export const authAPI = {
  async setAuth() {
    const res = await instance.get<SetAuthType>('auth/me');
    return res.data;
  },
  async login(email: string, password: string, rememberMe: boolean) {
      const res = await instance
        .post<LoginType>("auth/login", { email, password, rememberMe });
      return res.data;
  },
  async logout() {
      const res = await instance.delete<LogoutType>("auth/login");
      return res.data;
  },
};

export const dialogsAPI = {
  async getDialogs() {
    const { data, status } = await instance.get('dialogs');
    return { data, status };
  },
  sendMessage(userId: number, message: string) {
    return instance.post(`dialogs/${userId}/messages`, { body: message });
  },
  getMessages(userId: number) {
    return instance.get(`dialogs/${userId}/messages`);
  },
  async deleteMessage(messageId: number | string) {
    const res = await instance.delete(`dialogs/messages/${messageId}`);
    return res.data;
  },
};

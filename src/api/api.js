import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cc9f7e6f-c96d-4eb2-97ef-b9ab9495f033'
    }
});

export const profileAPI = {
    serProfile(id) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    },
    updatePhoto(photo) {
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
    getUser(page) {
        return instance.get(`users?page=${page}`);
    },
    followUser(id) {
        return instance.post(`follow/${id}`);
    },
    unFollowUser(id) {
        return instance.delete(`follow/${id}`);
    }
};

export const authAPI = {
    setAuth() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
};

export const dialogsAPI = {
    getMessages() {
        return instance.get('dialogs');
    },
    sendMessage(userId, message) {
        return instance.post(`dialogs/${userId}/messages`, {body: message});
    }
};

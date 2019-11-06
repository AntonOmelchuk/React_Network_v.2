import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cc9f7e6f-c96d-4eb2-97ef-b9ab9495f033'
    }
});

export const profileAPI = {
    serProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
};

export const usersAPI = {
    getUser(page) {
        return instance.get(`users?page=${page}`)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
    },
    unFollowUser(id) {
        return instance.delete(`follow/${id}`)
    }
};

export const authAPI = {
    setAuth() {
        return instance.get('auth/me')
    }
};
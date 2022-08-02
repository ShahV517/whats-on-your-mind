import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const authService = {
    login: (email, password) => {
        return axios.post(`${API_URL}/auth/login`, { email, password })
            .then(res => {
                if(res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    return true;
                }
                return false;
            }
        );
    },
    register: (name, email, password) => {
        return axios.post(`${API_URL}/auth/register`, { name, email, password });
    },
    logout: () => {
        localStorage.removeItem('token');
    },
    getUser: async () => {
        const token = localStorage.getItem('token');
        if(token) {
            return await axios.get(`${API_URL}/users`, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(res => {
                return res.data;
            }
            );
        }
        return null;
    },
    getPosts: async () => {
        const token = localStorage.getItem('token');
        if(token) {
            return await axios.get(`${API_URL}/posts`, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(res => {
                return res.data;
            }
            );
        }
        return null;
    },
    createPost : async (title, content) => {
        const token = localStorage.getItem('token');
        if(token) {
            const post = await axios.post(`${API_URL}/posts`, {
                 title: title,
                content: content
            }, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(res => {
                return res.data;
            }
            );
        }
        return null;
    },
    authHeader : () => {
        const user = authService.getUser();
        if(user && user.token) {
            return { 'x-access-token': user.token };
        }
        return {};
    }
}


export default authService;
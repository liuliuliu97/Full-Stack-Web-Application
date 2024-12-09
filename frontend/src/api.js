// interceptrr using axios to add headers to all requests
//automatically add correct headers
import axios from 'axios';
import { ACCESS_TOKEN } from './constants';

const api = axios.create({
    // import everything from .env file
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
    (config) => {
        // look the local storage for the access token
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            // pass the JWT token
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
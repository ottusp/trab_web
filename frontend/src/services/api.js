import axios from 'axios';
import dotenv from 'dotenv';

// creates the api to send requests to the backend
const api = axios.create({
    baseURL: `http://localhost:3333/api`,
    headers: {
        'x-access-token': localStorage.getItem('token')
    }
});

export default api;
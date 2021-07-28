import axios from 'axios';

// creates the api to send requests to the backend
const api = axios.create({
    baseURL: 'http://localhost:3333/api',
});

export default api;
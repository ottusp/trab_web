import axios from 'axios';
import dotenv from 'dotenv';

// creates the api to send requests to the backend
const api = axios.create({
    baseURL: `/teste`,
    // baseURL: `http://localhost:${process.env.PORT || 3333}/api
});

export default api;
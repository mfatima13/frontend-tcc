import axios from 'axios';
import { convertCompilerOptionsFromJson } from 'typescript';
import getCookie from '../utils/getCookie';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        XCSRFtoken: getCookie("csrftoken"),
    }
});

api.interceptors.request.use(async (config) => {
    //const token = getCookie("csrftoken");
    const user = localStorage.getItem('token');

    // console.log(token);
    if (user) {
        config.headers.Authorization = `Token ${user}`;

    } else {
        console.log("não há token")
    }
    //console.log(config);
    return config;
});

export default api;
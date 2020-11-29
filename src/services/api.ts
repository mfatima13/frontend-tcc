import axios from 'axios';
import getCookie from '../utils/getCookie';

// interface Response

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        XCSRFtoken: getCookie("csrftoken"),
    }
});

api.interceptors.request.use(async (config) => {
    const user = localStorage.getItem('token');

    if (user) {
        config.headers.Authorization = `Token ${user}`;

    } /*else {
        console.log("não há token")
    }
    //console.log(config);
    */
    return config;
});

export default api;
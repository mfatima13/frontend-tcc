import axios from 'axios';


function getCookie(name: any) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        XCSRFtoken: getCookie("csrftoken"),
    }
});

api.interceptors.request.use(async (config) => {
    const token = getCookie("csrftoken");
    const user = localStorage.getItem('token');

    // console.log(token);
    if (user) {
        config.headers.Authorization = `Token ${user}`;

    } else {
        console.log("não há token")
    }
    // console.log(config);
    return config;
});

export default api;
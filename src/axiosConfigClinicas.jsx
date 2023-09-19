// First we need to import axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ad-onboard-webapi-hom.azurewebsites.net',
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "POST, GET",
        "Access-Control-Allow-Headers": "*",
    },
});

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
// axios.defaults.preflightContinue = true;
// axios.defaults.withCredentials = false;


// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
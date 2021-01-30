import axios from 'axios';

//fetch API
const api = axios.create({
    //local host
    //baseURL: 'http://localhost:3001'
    //heroku api
    baseURL: 'https://santanas-api.herokuapp.com'
});


export default api;
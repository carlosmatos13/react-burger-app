import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-burger-app-496a0.firebaseio.com/'
});

export default instance;
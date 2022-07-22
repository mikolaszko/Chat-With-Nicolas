import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://messaging-app-mern123.herokuapp.com/',
});

export default instance;

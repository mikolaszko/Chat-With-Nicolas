import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ac-chat-mern12345.herokuapp.com/',
});

export default instance;

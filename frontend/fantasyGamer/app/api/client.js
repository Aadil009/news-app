import axios from 'axios';

export default axios.create({
    //baseURL: 'http://192.168.1.41:3000/api'
    baseURL: 'https://fantasy-gamer.herokuapp.com/api'
})
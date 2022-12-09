import axios from 'axios'

export const axiosInstance = axios.create({
     baseURL: 'http://localhost:4000'
    // baseURL: 'http://102.219.178.17:4000'
});


axiosInstance.defaults.withCredentials = true;

import React from 'react';
import UseAuth from './UseAuth';
import axios from 'axios';

const axiosInstance =axios.create({
    baseURL:'http://localhost:5000/'
})

const UseAxiosSecure = () => {

    const {user} = UseAuth()
    axiosInstance.interceptors.request.use(config =>{
        config.headers.authorization = `baseURL ${user.accessToken}`
        return config ;
    })
    return axiosInstance;
};

export default UseAxiosSecure;
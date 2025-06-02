import React from 'react';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const UseApplicationsApi = () => {

    const axiosSecure = UseAxiosSecure()

    const myApplicationsPromise = email =>{
        return axiosSecure.get(`applications?email=${email}`).then(res => res.data)
    }
    return {
        myApplicationsPromise
    }
};

export default UseApplicationsApi;
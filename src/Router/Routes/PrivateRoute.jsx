import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = use(AuthContext)

    if(loading){
        return <span className='loading loading-spinner text-info'></span>
    }

    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return (
      children
    );
};

export default PrivateRoute;
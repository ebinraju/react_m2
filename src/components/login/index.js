import React, { useEffect } from 'react';
import { getParcelByFilter } from '../../services/dashboardServices';

const Login = () => {
    useEffect(()=>{
        //sample api call
        getParcelByFilter({});
    },[]);
    return <div>Login page</div>
};
export default Login;

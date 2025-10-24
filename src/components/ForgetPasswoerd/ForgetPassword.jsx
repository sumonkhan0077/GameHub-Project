import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLocation } from 'react-router';

const ForgetPassword = () => {
    const {forgetPassword} = use(AuthContext)
    const location = useLocation()
    console.log(location.state?.email)
    return (
        <div>
            tis is password palta
        </div>
    );
};

export default ForgetPassword;
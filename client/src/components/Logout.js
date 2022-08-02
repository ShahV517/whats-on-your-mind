import React, {useEffect} from 'react';
import authService from '../services/auth';

const Logout = () => {
    useEffect(() => {
        authService.logout();
        window.location.replace('/');
    }
    , []);
    return (
        <div>
            <h1>Logout</h1>
        </div>
    );
}

export default Logout;
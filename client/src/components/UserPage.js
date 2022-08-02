import React, {useEffect, useState} from 'react';
import authService from '../services/auth';

const UserPage = () => {
    // fetch user data from server and present it in the page
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.replace('/login');
        }
        const getUserInfo = async () => {
            const user = await authService.getUser();
            if(user) {
                setUser(user);
            }
        }
        getUserInfo();
    }
    , []);

    return (
        <div>
            <h1>User Page</h1>
            <p>User: {user && user.name}</p>
            <p>Email: {user && user.email}</p>
        </div>
    );
}


export default UserPage;
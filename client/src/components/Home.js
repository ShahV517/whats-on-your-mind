import React, {useState, useEffect} from 'react';
import authService from '../services/auth';

const Home = () => {
    const [userName, setUserName] = useState(null);
    useEffect(() => {
        const getUserInfo = async () => {
            const user = await authService.getUser();
            if(user) {
                setUserName(user.name);
            }
        }
        getUserInfo();
    }
    , []);
    return (
        <div>
            {userName && <h1>Welcome, {userName}</h1>}
            {!userName && <h1>Welcome, guest</h1>}
        </div>
    );
}


export default Home;
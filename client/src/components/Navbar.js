import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setToken(token);
        }
    }
    , []);


    return (
        <div>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <span className="fs-4 d-flex align-items-center justify-content-left">What's on your mind?</span>
                    <ul className="nav me-auto">

                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link link-dark px-2">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts" className="nav-link link-dark px-2">Posts</Link>
                        </li>
                        {token ? (
                            <li className="nav-item">
                                <Link to="/create" className="nav-link link-dark px-2">Create Post</Link>
                            </li>
                        ) : null}
                        {token ? (
                            <React.Fragment>
                            <li className="nav-item">
                                <Link to="/user" className="nav-link link-dark px-2">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className="nav-link link-dark px-2">Logout</Link>
                            </li>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link link-dark px-2">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link link-dark px-2">Register</Link>
                                </li>
                            </React.Fragment>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
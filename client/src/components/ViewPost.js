import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import authService from '../services/auth';

const ViewPost = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.replace('/login');
        }
        const getPosts = async () => {
            const posts = await authService.getPosts();
            if(posts) {
                setPosts(posts);
            }
        }
        getPosts();
    }
    , []);

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ViewPost;
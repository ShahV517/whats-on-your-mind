import React, {useState, useEffect} from 'react';
import authService from '../services/auth';

const CreatePost = () => {

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.replace('/login');
        }
    }
    , []);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await authService.createPost(title, content)
        .then(res => {
            window.location.replace('/posts');
        })
        .catch(err => {
            console.log(err);
        }
        );
        
    }
    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}


export default CreatePost;
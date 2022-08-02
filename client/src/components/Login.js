import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';

const required = value => {
    if(!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword('');
        setEmail('');
        authService.login(email, password)
            .then(res => {
                if(res) {
                    window.location.replace('/');
                }
            }
        )
        .catch(err => {
            setMessage(err.response.data.message);
        }
        );
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Login</h1>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="email"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                validations={[required]}
                            />
                        </div>
                        <Button type="submit" className="btn btn-primary">Login</Button>
                    </Form>
                    <div className="text-center">
                        {message && (
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;
import { useState } from 'react';
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

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
        setEmail('');
        authService.register(username, email, password)
            .then(res => {
                if(res) {
                    setMessage('Registration successful! Please login.');
                    setSuccessful(true);
                }
            })
            .catch(err => {
                setMessage(err.response.data.message);
            }
        );
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
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
                    <h1 className="text-center">Register</h1>
                    <Form 
                        onSubmit={handleSubmit}
                        className="form-signin"
                    >
                        {!successful && (
                            <div>
                                <div className="form-group p-2">
                                    <label htmlFor="username">Username</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        minLength="5"
                                        maxLength="15"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        validations={[required]}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        minLength="5"
                                        maxLength="50"
                                        onChange={handleEmailChange}
                                        validations={[required]}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="password">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        minLength="6"
                                        maxLength="20"
                                        onChange={handlePasswordChange}
                                        validations={[required]}
                                    />
                                </div>
                                <div className="form-group p-2 text-center">
                                    <Button className="btn btn-primary" type="submit">
                                        Register
                                    </Button>
                                </div>
                            </div>
                        )}
                        {message && (
                            <div className="form-group">
                                <div
                                    className={successful ? "alert alert-success" : "alert alert-danger"}
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}


export default Register;
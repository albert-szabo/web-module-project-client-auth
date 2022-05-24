import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.payload);
                push('/friends');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input id='username' name='username' onChange={handleChange}/>
                </div>
        
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' onChange={handleChange}/>
                </div>
        
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;
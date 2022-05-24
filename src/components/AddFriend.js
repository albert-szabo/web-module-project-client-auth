import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddFriend = () => {
    const { push } = useHistory();

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', formData, {
            headers: {
                authorization: token
            }
        })
            .then(response => {
                push('/friends');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Friend Name:</label>
                    <input id='friend_name' name='name' onChange={handleChange}/>
                </div>
        
                <div>
                    <label htmlFor='email'>Friend Email:</label>
                    <input type='email' id='friend_email' name='email' onChange={handleChange}/>
                </div>
        
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;
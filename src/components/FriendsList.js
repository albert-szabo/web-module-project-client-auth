import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(response => {
                setFriends(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h2>Friends List</h2>
            <ul>
                {
                    friends.map(friend => {
                        return <li key={friend.age}>{friend.name} - {friend.email}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default FriendsList;
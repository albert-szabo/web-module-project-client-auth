import React from 'react';

const AddFriend = () => {
    return (
        <div>
            <h2>Add Friend</h2>
            <form>
                <div>
                    <label htmlFor='name'>Friend Name:</label>
                    <input id='friend_name'/>
                </div>
        
                <div>
                    <label htmlFor='email'>Friend Email:</label>
                    <input type='email' id='friend_email'/>
                </div>
        
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;
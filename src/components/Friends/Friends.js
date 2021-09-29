import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h2>i have friends: {users.length}</h2>
            <div className='field-container'>
            {
                    users.map(user => <Friend
                        user={user}
                        key={user.id}
                    ></Friend>)
            }
           </div>
        </div>
    );
};

export default Friends;
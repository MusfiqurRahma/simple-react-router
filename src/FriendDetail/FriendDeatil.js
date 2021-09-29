import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDeatil = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState([]);
    const history =useHistory()
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data=>setFriend(data))
    }, [])
    const handleClick = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h2>Friend Detail Comming Soon:{id}</h2>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h3>{friend.website}</h3>
            <h4>Works at: {friend.company?.name}</h4>
            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default FriendDeatil;

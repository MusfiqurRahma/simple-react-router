import React from 'react';
import { Link,useHistory} from 'react-router-dom';

const Friend = (props) => {
    const { id, name, email, phone, address } = props.user;

    const history =useHistory()
    
    const friendStyle = {
        border: '1px solid goldenrod',
        margin: '5px',
        padding: '5px'
    };
    const url = `/friend/${id}`;
    const handleClick = () => {
        history.push(`/friend/${id}`)
    }
    
    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <h3>My Email is {email}</h3>
            <h3>Call me {phone}</h3>
            <h4>i live in {address.city}</h4>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;
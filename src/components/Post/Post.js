import React from 'react';
import { Link,useHistory} from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post;
    const history = useHistory()
    const clickhandler = () => {
        history.push(`/post/${id}`)
    }
    return (
        <div>
            <h2>Post {title}</h2>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <br />
            <button onClick={clickhandler}>See Post Details</button>
        </div>
    );
};

export default Post;
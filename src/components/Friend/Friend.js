import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, username} = props.friend
    const navigate = useNavigate();
    const showFriendDetails = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <button onClick={showFriendDetails} >{username}</button>
        </div>
    );
};

export default Friend;
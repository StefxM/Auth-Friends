import React from 'react';
import {useHistory} from 'react-router-dom';

function FriendCard(props){

    const history = useHistory();
    console.log(props);
    return(
        <div className='friend' 
        onClick={() => history.push(`/updateFriend/${props.id}`)}>
        <h3>Name:{props.name}</h3>
        <p>Age:{props.age}</p>
        <p>Email:{props.email}</p>
        <button onClick={event => {
            event.stopPropagation();
            props.deleteFriend(props.id)
        }}>Delete</button>
        </div>
    );
}

export default FriendCard;
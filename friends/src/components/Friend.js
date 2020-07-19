import React from 'react';
import axiosWithAuth from './AxiosWithAuth';

import FriendCard from './FriendCard';

function Friend(props){
    console.log(props);
    const deleteFriend = id => {
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {props.setFriends(props.friends.filter(friend => friend.id !== res.data));
        })
        .catch(err => console.log(err));
    };

    return(
        <div>
            {props.friends.map(friend => {
                return (
                    <FriendCard
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                        deleteMovie={deleteFriend}/>
                );
            })}
        </div>
    );
}
export default Friend;
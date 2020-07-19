import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Friend from './Friend';
import axiosWithAuth from './AxiosWithAuth';


const FriendsList = () => {
    const [friends,setFriends] = useState([])
    const history = useHistory();

    useEffect(() => {
    axiosWithAuth().get('/friends')
    .then(res => {setFriends(res.data)})
    .catch(err => console.log(err))
    }, [])

    //console.log(list);
    return (
        <div >
            <h1>Friends List</h1>
            <button onClick={() => history.push('./addFriend')}>Add New Friend</button>
            {friends.length > 0 ? <Friend friends={friends} setFriends={setFriends}/> : ''}
        </div>
    );
}

export default FriendsList;

/*key={id}
<NewFriendForm props={props}/>
            <p>name:{name}</p>
            <p>age:{age}</p>
            <p>email:{email}</p>*/ 
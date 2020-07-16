import React from 'react';

import NewFriendForm from '../components/newFriendForm';
import { axiosWithAuth } from './axiosAuth';


const FriendsList = (props) => {
    const list = () => {
    axiosWithAuth().post('http://localhost:5000/api/friends')
    .then(res => {console.log(res.data)})
    .catch(err => console.log(err))
    }

    console.log(list);
    return (
        <div >
            <NewFriendForm props={props}/>
        </div>
    )
}

export default FriendsList;

/*key={id}
<NewFriendForm props={props}/>
            <p>name:{name}</p>
            <p>age:{age}</p>
            <p>email:{email}</p>*/ 
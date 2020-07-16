import React from 'react';

import NewFriendForm from '../components/newFriendForm';
import { axiosWithAuth } from './axiosAuth';


const FriendsList = (props) => {

    //axiosWithAuth().
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
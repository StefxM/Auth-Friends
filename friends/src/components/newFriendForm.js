import React, {useState} from 'react';
import { axiosWithAuth } from './axiosAuth';

const NewFriendForm = (props) => {

    const [addnewFriend, setNewFriend] = useState({
        name:'',
        age:null,
        email:''
    });

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', addnewFriend)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
    }
     const handleChanges = e => {
         setNewFriend({
             ...addnewFriend,
             [e.target.name]: e.target.value
         });
     };

    const onSubmit = e => {
        e.preventDefault();
    }
    //console.log(props);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                type='text'
                name='name'
                placeholder='Name'
                value={props.state}
                onChange={handleChanges}/>

                <input 
                type='numbers'
                name='age'
                placeholder='Age'
                value={props.state}
                onChange={handleChanges}/>

                <input 
                type='text'
                name='email'
                placeholder='Email'
                value={props.state}
                onChange={handleChanges}/>

                <button onClick={handleChanges}>Add</button>
            </form>
        </div>
    )
}

export default NewFriendForm;
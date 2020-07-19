import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axiosWithAuth from './AxiosWithAuth';

const NewFriend = (props) => {

    const [state, setState] = useState({
        
        name:'',
        age:'',
        email:''
    });
    const history = useHistory();

    const submit = e => {
        e.preventDefault();
        setState({
            ...state,
            id:Date.now()
        });
        axiosWithAuth().post('/friends', state)
        .then(res => {
            history.push('/friends')
        })
        .catch(err => console.log(err))
    }
     const handleChanges = e => {
         setState({
             ...state,
             [e.target.name]: e.target.value
         });
     };

    
    //console.log(props);

    return (
        <div>
            <form onSubmit={submit}>
                <input 
                type='text'
                name='name'
                placeholder='Name'
                value={state.name}
                onChange={handleChanges}/>

                <input 
                type='numbers'
                name='age'
                placeholder='Age'
                value={state.age}
                onChange={handleChanges}/>

                <input 
                type='text'
                name='email'
                placeholder='Email'
                value={state.email}
                onChange={handleChanges}/>

                <button>Add Friend</button>
            </form>
        </div>
    );
}

export default NewFriend;
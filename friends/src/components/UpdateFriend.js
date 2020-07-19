import React, { useState, useEffect } from "react";
import axiosWithAuth from "./AxiosWithAuth";
import { useHistory, useParams } from "react-router-dom";

function UpdateFriend() {
    const [state, setState] = useState({
        name:'',
        age:'',
        email:''
    });

    const {id} = useParams();
    const history = useHistory();

    useEffect(()=> {
        axiosWithAuth()
        .get(`/friends/${id}`)
        .then(res => {
            setState(res.data);

        })
        .catch(err => console.log(err));
    }, [id]);

    const handlechange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }


    const submit = event => {
        event.preventDefault();
        setState({
            ...state,
            id: Date.now()
        });
        axiosWithAuth()
        .put(`/friends/${id}`, state)
        .then(res => {
            setState(res.data)
            history.push('/friends');
        })
        .catch(err => console.log(err));
    };
    return (
        <form onSubmit={submit}>
            <input
                type='text'
                name='name'
                value={state.name}
                onChange={handlechange}
                placeholder='name'/>
                <input
                type='number'
                name='age'
                value={state.age}
                onChange={handlechange}
                placeholder='age'/>
                <input
                type='text'
                name='email'
                value={state.email}
                onChange={handlechange}
                placeholder='email'/>
            <button>Update Friend</button>
        </form>
    );
}
export default UpdateFriend;
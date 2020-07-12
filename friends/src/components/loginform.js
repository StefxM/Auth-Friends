import React, {useState} from 'react';
import {axiosWithAuth} from '../components/axiosAuth';
import e from 'express';

const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    
    });

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log({err}))
    
    }

    const handleChange = e => {
        setCredentials: {
            [...credentials],
            e.target.value,
        };
    }



    return (
        <div> 
        <form>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default LoginForm;
import React, {useState} from 'react';
import {axiosWithAuth} from './axiosAuth';


const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({});

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected');
        })
        .catch(err => console.log({err}))
    }

    const handleChange = (e) => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value}
        )
    }



    return (
        <div> 
        <form onSubmit={login}>
            <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={credentials.username} 
            onChange={handleChange}/>

            <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={credentials.password} 
            onChange={handleChange}/>

            <button>Log in</button>
        </form>
        </div>
    )
}

export default LoginForm;
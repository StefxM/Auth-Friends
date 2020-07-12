import React, {useState} from 'react';
import {axiosWithAuth} from '../components/axiosAuth';
import e from 'express';

const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({});

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/');
        })
        .catch(err => console.log({err}))
    
    }

    const handleChange = (e) => {
        setCredentials: {
            ...credentials,
            [e.target.name]: e.target.value
        }
    }



    return (
        <div> 
        <form onSubmit={this.login}>
            <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={this.handleChange}/>
            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={this.handleChange}/>
            <button>Log in</button>
        </form>
        </div>
    )
}

export default LoginForm;
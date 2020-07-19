import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function LoginForm() {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const history = useHistory();

    const submit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", login)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.payload);
            history.push('/friendslist');
        })
        .catch(err => console.log({err}))
    }

    const handleChange = (e) => {
        setLogin({
            ...login, 
            [e.target.name]: e.target.value}
        )
    }



    return (
        <div> 
        <form onSubmit={submit}>
            <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={login.username} 
            onChange={handleChange}/>

            <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={login.password} 
            onChange={handleChange}/>

            <button>Log in</button>
        </form>
        </div>
    )
}

export default LoginForm;
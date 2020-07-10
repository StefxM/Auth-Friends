import React from 'react';

const LoginForm = () => {

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
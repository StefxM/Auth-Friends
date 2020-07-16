import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PrivateRoute from './components/PrivateRoute';

import FriendsList from './components/friendsList';
import LoginForm from './components/loginForm';
function App() {
  return (
    <Router>
    <div className="App">
      <ul>
      <Link to="/login">Login Page</Link>
      <Link to="/protected">Protected Page</Link>
      </ul>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList}/>
        <Route path='/login' component={LoginForm}/>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;

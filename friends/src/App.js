import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import LoginForm from './components/loginForm';
import NewFriend from './components/NewFriend';
import UpdateFriend from './components/UpdateFriend'
function App() {
  return (
    <Router>
    <div className="App">
      <ul>
      <Link to="/login">Login Page</Link>
      <Link to="/friendlist">Friend List</Link>
      </ul>
      <Switch>
        <Route path='/login' component={LoginForm}/>
        <PrivateRoute path='/friendslist' component={FriendsList}/>
        <PrivateRoute path='/addFriend' component={NewFriend}/>
        <PrivateRoute path='/updateFriend/:id' component={UpdateFriend}/>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
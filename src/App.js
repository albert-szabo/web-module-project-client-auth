import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Friends Database</h1>
          <Link className='link' to='/login'>Log In</Link>
          <Link className='link' to='/friends'>Friends List</Link>
          <Link className='link' to='/friends/add'>Add Friend</Link>
          <Link className='link' to='/logout'>Log Out</Link>
        </header>

        <Route exact path='/'>
          <Login />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <PrivateRoute exact path='/friends' component={FriendsList}/>
        <PrivateRoute exact path='/friends/add' component={AddFriend}/>
        <PrivateRoute exact path='/logout' component={Logout}/>

      </div>
    </Router>
  );
}

export default App;

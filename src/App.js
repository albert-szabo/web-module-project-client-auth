import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/'>
          <Login />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/friends'>
          <FriendsList />
        </Route>

        <Route exact path='/friends/add'>
          <AddFriend />
        </Route>
      </div>
    </Router>
  );
}

export default App;

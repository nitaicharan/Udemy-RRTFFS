import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed';
import Profile from './containers/Profile';

function App() {
  return (
    <div>
      <Route path="/register" component={Register} />
      <Route path="/app/" component={Navbar} />
      <Route path="/app/newsfeed" component={NewsFeed} />
      <Route path="/app/Profile" component={Profile} />
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;

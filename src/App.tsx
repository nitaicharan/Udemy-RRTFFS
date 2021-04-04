import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/app/newsfeed" component={NewsFeed} />
      </Switch>
    </div>
  );
}

export default App;

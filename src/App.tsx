import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Homeparent from './Homeparent';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Homeparent} />

  </Switch>
);

export default App;

import React from 'react';
import './app.css';
import { Header } from '../components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from '../components/pages/homepage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/area">
          <Area />
        </Route> */}
        {/* <Route path="/category">
          <Category />
        </Route> */}
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

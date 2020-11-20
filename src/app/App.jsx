import React from 'react';
import './app.css';
import { Header } from '../components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      {/* <Switch>
        <Route path="/area">
          <Area />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;

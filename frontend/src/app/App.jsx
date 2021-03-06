import React from 'react';
import './app.css';
import { Header } from '../components/header/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from '../pages/homepage';
import RecipesPage from '../pages/recipesPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/recipes">
          <RecipesPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

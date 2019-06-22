import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Nav />
    <Route exact path="/" component={Home} />
  </Router>
);

export default App;

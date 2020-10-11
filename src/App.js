import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/pages/Footer/Footer'
import Home from './components/pages/Homepage/Home'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Switch>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

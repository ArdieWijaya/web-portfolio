import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/pages/Footer/Footer'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

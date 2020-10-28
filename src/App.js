import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import About from './components/About/About';
import User from './components/User/User';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/About" component={About} />
            <Route exact path="/:id" component={User} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
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

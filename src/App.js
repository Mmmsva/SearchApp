import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './About';
import Blog from './Blog';
import Home from './Home';
import index from './index';

import main from './main';
import Navbar from './Navbar';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:login" component={User} />
                <Route exact path="/about" component={About} />
                <Route path="/about" component={NotFound} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

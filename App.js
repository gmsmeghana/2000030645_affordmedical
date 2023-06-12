// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AllTrainsPage from './AllTrainsPage';
import SingleTrainPage from './SingleTrainPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
            <li>
              <Link to="/train/123">Single Train</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={AllTrainsPage} />
        <Route path="/train/:trainNumber" component={SingleTrainPage} />
      </div>
    </Router>
  );
};

export default App;

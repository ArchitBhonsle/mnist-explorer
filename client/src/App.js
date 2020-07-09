import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Visualize from './pages/Visualize/Visualize';

import './App.css';

function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/visualize'>
            <Visualize />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
      {/* <div>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div> */}
    </React.Fragment>
  );
}

export default App;

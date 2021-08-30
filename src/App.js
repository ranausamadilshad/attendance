import React from 'react';

import Home from './Pages/Home';
import { HashRouter as Router} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Home />
    </Router>
    </>
  );
}

export default App;

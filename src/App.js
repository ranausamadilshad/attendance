import React from "react";

import Home from "./Pages/Home";
import { HashRouter as Router } from "react-router-dom";
import Home2 from "./Pages/Home2";

function App() {
  return (
    <>
      <Router>{localStorage.getItem("token") ? <Home /> : <Home2 />}</Router>
    </>
  );
}

export default App;

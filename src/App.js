import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/help'>
        <Help />
      </Route>
      <Route exact path='/form'>
        <Form />
      </Route>
    </Router>
  );
}

export default App;

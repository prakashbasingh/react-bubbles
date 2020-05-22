import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from"./components/BubblePage";



function App() {
  return (
    <Router>
      <section>
        <h1>React-Bubble</h1>
        <div className="App">
          <Route exact path="/" component={Login} />
          {/* Build a PrivateRoute component that will display BubblePage when you're authenticated  */}
          <PrivateRoute exact path= "/protected" component={BubblePage}/>
        </div>
      </section>
    </Router>
  );
}

export default App;

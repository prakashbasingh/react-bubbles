import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <div style = {{ margin: '1rem'}}>
              <link to='/login'>Login</link>
            </div>
            <div style = {{ margin: '1rem'}}>
              <link to='/protected'>Bubble Page (Protected-Page)</link>
            </div>
        </nav>
        <div className="App">
          <Route exact path="/" component={Login} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
          <PrivateRoute exact path='/protected' component={BubblePage}/>

        </div>
      </div>  
    </Router>
  );
}

export default App;

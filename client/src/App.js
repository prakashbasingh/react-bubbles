import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.scss";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from"./components/BubblePage";
import styled from"styled-components"

const MainContainer = styled.div`
border: 2px solid black;
padding: 2rem;
text-align: center;
background: lightgray;
`
const Header = styled.h1`
background: palevioletred;
color: chartreuse;
text-shadow: 4px 2px 0 black;	
;
`
const Navigator = styled.nav`
display: flex;
/* width: 50%; */
justify-content: space-around;
text-align: center;
text-decoration: none;
background: rosybrown;
`
function App() {
  return (
    <MainContainer>
      <Router>
        <Header>React-Bubble App</Header>
      <Navigator>
        <div>
          <Link style= {{color: "green"}} to = "/login"> Log In </Link>
        </div>
        <div>
          <Link  style= {{color: "red"}} to = "/login"> Log out</Link>
        </div>
      </Navigator>

        <Switch>
          <div className="App">
            <Route exact path="/login" component={Login} />
            {/* Build a PrivateRoute component that will display BubblePage when you're authenticated  */}
            <PrivateRoute exact path= "/protected" component={BubblePage}/>
          </div>
        </Switch>
      </Router>
    </MainContainer>
 
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.scss";
import styled from "styled-components"

import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute"
import BubblePage from "./components/BubblePage";

const MainContainer = styled.div`
  text-align: center;
  border: 1px solid black;
  height: 100vh;
  width: 70vw;
  border: 1px solid cyan;
  color: orange;
  margin: 10rem auto;
  background: lightcyan;
  box-shadow: 0 0 15px 12px cyan;

`
const Navigator = styled.div`
display: flex;
justify-content: space-around;
background: slateblue;
font-size: 20px;
margin: 0 20rem;
box-shadow: 0 0 5px 2px slateblue;
`



function App() {
  return (
    <Router>
      <MainContainer>
        <header> 
          <h1>Welcome to the Bubble App!</h1>
        </header>
        <Navigator>
          <div>
            <Link  to = "/" style = {{color: "white"}}> Log In </Link>
          </div>
          <div>
            <Link  to = "/" style = {{color: "white"}}> Log out</Link>
          </div>
          <div>
            <Link to ="/bubblePage" style = {{color: "white"}}> Bubble Page </Link>
          </div>
        </Navigator>
        <Switch>
          <div >
              <Route exact path="/" component={Login} />
                    {/*  Build a PrivateRoute component that will display BubblePage when you're authenticated */}
              <PrivateRoute exact path="/bubblePage" component={BubblePage}/>
          </div>
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;

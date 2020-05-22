import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from"styled-components"


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubbleContainer = styled.div`
display: flex;
`

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  console.log(colorList, 'Do we HAve Color????????????????')
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then(res => {
        console.log(res, 'what we have here???!!!!????')
        setColorList(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <BubbleContainer> 
            <ColorList colors={colorList} updateColors={setColorList} />
            <Bubbles colors={colorList} />
      
    </BubbleContainer>
  );
};

export default BubblePage;

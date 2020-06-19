import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import styled from "styled-components"
 const BubbleContainer = styled.div`
 display: flex;
 `

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  console.log(colorList, 'Do we HAve Color????????????????')
  const[update, setUpdate] = useState(false);

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get("/colors")
    .then((res) => {
      console.log(res, "? / ? / ?  What res We Hae Here")
      setColorList(res.data)
      setUpdate(false)
    })
    .catch((error) => {
      console.log(error, "? ? ? error ? ? ?")
    })
  }, [update])


  return (
    <BubbleContainer>
      <ColorList colors={colorList} updateColors={setColorList} setUpdate={setUpdate}/>
      <Bubbles colors={colorList} />
    </BubbleContainer>
  );};

export default BubblePage;

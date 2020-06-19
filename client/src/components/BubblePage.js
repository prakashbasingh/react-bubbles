import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  console.log(colorList, 'Do we HAve Color????????????????')


  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get("/colors")
    .then((res) => {
      console.log(res, "? / ? / ?  What res We Hae Here")
      setColorList(res.data)
   
    })
    .catch((error) => {
      console.log(error, "? ? ? error ? ? ?")
    })
  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );};

export default BubblePage;

import React from 'react';
import Web from "./components/images/img 2.jpg";
import {NavLink} from "react-router-dom";
import Common from "./Common"

const Home = () => {
  return (
     <>
      <Common name="Grow your business with" imgsrc={Web} visit="/service" btname="Get Started"></Common>
     </>
   );
}

export default Home;

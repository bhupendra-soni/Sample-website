import React from 'react';
import Web from "./components/images/img-ani.gif";
import {NavLink} from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    
      <Common name="Grow your business with" imgsrc={Web} visit="/service" btname="Get Started" />
    // <div><h1>hello world</h1></div>
   );
};

export default Home;

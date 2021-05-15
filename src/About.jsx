import React from 'react';
import Web from "./components/images/img-8.jpg";
import {NavLink} from "react-router-dom";
import Common from "./Common"

const About = () => {
  return (
     <>
     <Common name="Welcome to About page" imgsrc={Web} visit="/contact" btname="Contact Now" />
     </>
   );
}

export default About;

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import HiringPartners from "./HiringPartners";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect, Router, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Web from "./components/images/img-8.jpg";
import Common from "./Common"

const App = () => {
  return (

    <BrowserRouter>
    <>
    <Navbar />
      
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/hiringpartners" component={HiringPartners} />
      <Redirect to="/" />
    </Switch>
    
    </>
    {/* <Common name="Welcome to About page" imgsrc={Web} visit="/contact" btname="Contact Now" />  */}
    {/* <Footer /> */}
    </BrowserRouter>
   );
};

export default App;

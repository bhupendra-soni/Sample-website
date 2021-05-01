import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Test from './components/Slide';
import Footer from './components/Footer'; 


// import {Dropdown,Button} from 'react-bootstrap'

function App() {
  return (
    
    <>
    <div>
      
      <Test />
      <Footer />
    </div>
    {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Button variant="primary" size="sm">
      Small button
    </Button>
    <Button variant="success">Success</Button>
  </Dropdown.Menu>
</Dropdown> */}

      {/* <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {HTMLFormElement} /> 
      </Switch>
      </Router> */}
      </>
  );
}

export default App;

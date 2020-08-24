import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

import Nav from './Navbar'
import SignUp from './SignUp'
import SignInSide from './SignInSide';


function App() {
  
  return (

    <Router>
      <div className="App">
     
        <Nav />
      
          <Route exact path='/' component={SignInSide} />
          <Route component={SignUp} path = '/SignUp'/>
     

      </div>
    </Router>
  );

}

export default App;
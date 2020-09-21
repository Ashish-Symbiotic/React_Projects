import React, { useState, useEffect } from "react";
import Forms from "./Forms";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantList from "./components/RestrauntList";
import logo from "./logo.svg";
import "./App.css";
/*import Home from './Home';
import Profile from './Profile';

//Demo for Class component using state, lifecycle



class  App extends React.Component {
  constructor()
  {
    super();
    this.state={
      data:null,
      who:null
    }
    console.warn("Constructor");
  }


  /*componentDidMount() //Called when data is ready and after the Render
  {
    console.warn("componentDidMount");
    this.setState({data:"updated"});
    
  }*/

/* componentDidUpdate()
  {
    console.warn("Update");
    if(this.state.who == null)
    this.setState({who:"This"});
  }
  render(){
    console.warn("Render");
  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {
         React.createElement(
           'h1',
           {className:'head-tag'},
           'Hello JSX'
          )
       }

      <Profile></Profile>
      <h1> {this.state.who} </h1>
       <button onClick={()=>{this.setState({data:"Yes"})}}>Activate Me</button>  
      </header>
    </div>
  );
}
}

export default App;*/

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"> <Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link">  <Link to="/list">List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/details">Details</Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/search">Search</Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/update">Update</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        

        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/details">
          <RestaurantDetail />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route path="/update/:id" 
        render= {props =>( 
        <RestaurantUpdate {...props} />
  )}
        >
        
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;

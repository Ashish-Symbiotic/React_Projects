import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';


function App() {
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
      
          <Profile text ={{name:'peter'}} data="Profile"/>
      </header>
    </div>
  );
}

export default App;

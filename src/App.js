// import React from 'react';
import React, { useState } from 'react';
// import logo from './logo.svg';
import Form from './Form';
import Team from './Team';
import './App.css';



function App() {
  const [teamMembers, setTeamMembers] = useState([])

  

  return (
    <div className="App">
      <h1>React Team Builder</h1>
      <Form teamMembers = {teamMembers} setTeamMembers ={setTeamMembers} />
      <Team teamMembers = {teamMembers}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;

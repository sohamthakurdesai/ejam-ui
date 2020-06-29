import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';

import DeploymentDetails from './Components/DeploymentDetails';
import TemplateForm from './Components/TemplateForm';

function App() {
  return (
    <Container>
      <TemplateForm/>
      <DeploymentDetails/>
    </Container>
  );
}

export default App;

{
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}
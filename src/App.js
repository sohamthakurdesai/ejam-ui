import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import DeploymentDetails from './Components/DeploymentDetails';
import TemplateForm from './Components/TemplateForm';
import { getTemplatesAndVersions, getDeployments } from './actions/applicationActions'


function App() {
  const dispatch = useDispatch()
  dispatch(getTemplatesAndVersions())
  dispatch(getDeployments())
  return (
    <Container>
      <TemplateForm/>
      <DeploymentDetails/>
    </Container>
  );
}

export default App;
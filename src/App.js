import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import TemplateForm from './Components/TemplateForm';
import { getTemplatesAndVersions, getDeployments } from './actions/applicationActions'
import CountdownTimer from './Components/CountdownTimer';


function App() {
  const dispatch = useDispatch()
  dispatch(getTemplatesAndVersions())
  dispatch(getDeployments())
  return (
    <Container>
      <TemplateForm/>
      <CountdownTimer/>
    </Container>
  );
}

export default App;
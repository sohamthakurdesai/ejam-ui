import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import TemplateForm from './Components/TemplateForm';
import DeploymentDetails from './Components/DeploymentDetails';
import { getTemplatesAndVersions, getDeployments } from './actions/applicationActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch()
  dispatch(getTemplatesAndVersions())
  dispatch(getDeployments())
  return (
    <Container>
      <TemplateForm/>
      <DeploymentDetails/>
      <ToastContainer />
    </Container>
  );
}

export default App;
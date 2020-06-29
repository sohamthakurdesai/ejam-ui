import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Form } from 'reactstrap';

const DeploymentDetails = () => {
    let { deploymentData, deploymentDataFetchError } = useSelector(state => state.applicationReducer);

    if(deploymentDataFetchError !== "") {
        return(
            <Form>
                Error: {deploymentDataFetchError}
            </Form>
        )
    } else {

        if(deploymentData.message) {
            return(
                <Form>
                    {deploymentData.message}
                </Form>
            )
        } else {
            return(
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>Template Name</th>
                            <th>Version</th>
                            <th>Deployed Date</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
            )
        }
    }
}

export default DeploymentDetails
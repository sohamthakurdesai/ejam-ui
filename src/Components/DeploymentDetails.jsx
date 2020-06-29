import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Form } from 'reactstrap';

const DeploymentDetails = () => {
    let { deploymentData, deploymentDataFetchError } = useSelector(state => state.applicationReducer);

    if(deploymentDataFetchError !== "") {
        return(
            <div style={{'padding-top':'40px'}}>
                Error: {deploymentDataFetchError}
            </div>
        )
    } else {

        if(deploymentData.message) {
            return(
                <div style={{'padding-top':'40px'}}>
                    {deploymentData.message}
                </div>
            )
        } else {
            return(
                <div style={{'padding-top':'40px'}}>
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
                </div>
            )
        }
    }
}

export default DeploymentDetails
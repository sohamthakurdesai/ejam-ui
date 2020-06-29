import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Form, Button } from 'reactstrap';

const DeploymentDetails = () => {
    let { deploymentData, deploymentDataFetchError } = useSelector(state => state.applicationReducer);

    console.log("deploymentData==>", deploymentData)
    if(deploymentDataFetchError !== "") {
        return(
            <div style={{'paddingTop':'40px'}}>
                Error: {deploymentDataFetchError}
            </div>
        )
    } else {

        if(deploymentData.length === 0) {
            return(
                <div style={{'paddingTop':'40px'}}>
                    No deployments.
                </div>
            )
        } else {
            return(
                <div style={{'paddingTop':'40px'}}>
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>Template Name</th>
                                <th>Version</th>
                                <th>Deployed At</th>
                                <th>Application URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                deploymentData.map((element, i) => {
                                    return (
                                        <tr>
                                            <th>{element.templateName}</th>
                                            <th>{element.version}</th>
                                            <th>{element.createdAt}</th>
                                            <th>{element.url}</th>
                                            <th>
                                                <Button>Delete</Button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export default DeploymentDetails
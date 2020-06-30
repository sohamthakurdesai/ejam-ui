import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'reactstrap';
import { deleteDeployment, getDeployments, resetDeletedCount } from '../actions/applicationActions';

const DeploymentDetails = () => {
    let { deploymentData, deploymentDataFetchError, deletedCount } = useSelector(state => state.applicationReducer);
    const dispatch = useDispatch()

    if(deletedCount > 0) {
        dispatch(getDeployments())
        dispatch(resetDeletedCount())
    }

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
                                        <tr key={element._id}>
                                            <th>{element.templateName}</th>
                                            <th>{element.version}</th>
                                            <th>{element.createdAt}</th>
                                            <th>{element.url}</th>
                                            <th>
                                                <Button id={element._id} onClick={(e) => {
                                                    let _id = e.target.id
                                                    dispatch(deleteDeployment(_id))
                                                }}>
                                                    Delete
                                                </Button>
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
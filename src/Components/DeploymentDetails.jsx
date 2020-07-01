import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Card, CardBody, CardHeader } from 'reactstrap';
import { deleteDeployment, getDeployments, resetDeletedCount } from '../actions/applicationActions';
import moment from 'moment'

const DeploymentDetails = () => {
    let { deploymentData, deploymentDataFetchError, deletedCount, dataCount} = useSelector(state => state.applicationReducer);
    const dispatch = useDispatch()

    if(deletedCount > 0) {
        dispatch(getDeployments())
        dispatch(resetDeletedCount())
    }
    
    if(dataCount > 0) {
        dispatch(getDeployments())
        dispatch(resetDeletedCount())
    }
    
    if(deploymentDataFetchError !== "") {
        return(
            <div className="div-common">
                <Card>
                    Error: {deploymentDataFetchError}
                </Card>
            </div>
        )
    } else {

        if(deploymentData.length === 0) {
            return(
                <div className="div-common">
                    <Card>
                        <CardHeader>Deployment Details</CardHeader>
                        <CardBody>
                            No deployments.
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return(
                <div className="div-common">
                    <Card>
                        <CardHeader>Deployment Details</CardHeader>
                        <CardBody>
                        <Table bordered responsive>
                            <thead>
                                <tr>
                                    <th>Template Name</th>
                                    <th>Version</th>
                                    <th>Deployed At</th>
                                    <th>Application URL</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    deploymentData.map((element, i) => {
                                        return (
                                            <tr key={element._id}>
                                                <th>{element.templateName}</th>
                                                <th>{element.version}</th>
                                                <th>{moment(element.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</th>
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
                        </CardBody>
                    </Card>
                </div>
            )
        }
    }
}

export default DeploymentDetails
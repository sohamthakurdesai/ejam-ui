import React, { useState } from 'react';
import { Table } from 'reactstrap';

const DeploymentDetails = () => {
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

export default DeploymentDetails
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'reactstrap';

const service_url = process.env.REACT_APP_EJAM_SERVICE_URI

const TemplateForm = () => {
    return(
        <Form>
            <Button>Submit</Button>
        </Form>
    )
}

export default TemplateForm
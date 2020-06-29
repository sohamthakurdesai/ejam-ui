import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'reactstrap';

const TemplateForm = () => {
    let { templateData, error } = useSelector(state => state.applicationReducer);

    console.log("templateData===>", templateData)
    console.log("error===>", error)

    if(error !== "") {
        return(
            <Form>
                Error: {error}
            </Form>
        )
    } else {
        return(
            <Form>
                <Button>Submit</Button>
            </Form>
        )
    }

}

export default TemplateForm
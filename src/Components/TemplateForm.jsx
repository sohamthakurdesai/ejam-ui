import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Button } from 'reactstrap';

const TemplateForm = () => {
    let { templateData, templateDataFetchError, deploymentDataFetchError } = useSelector(state => state.applicationReducer);

    console.log("templateData===>", templateData)
    console.log("templateDataFetchError===>", templateDataFetchError)

    if(templateDataFetchError !== "") {
        return(
            <Form>
                Error: {templateDataFetchError}
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
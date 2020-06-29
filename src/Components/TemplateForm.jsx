import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { addDeployment } from '../actions/applicationActions'

const TemplateForm = () => {
    let { templateData, templateDataFetchError } = useSelector(state => state.applicationReducer);
    const [versions, setVersions] = useState([]);

    const dispatch = useDispatch()

    //border:'2px solid #00000

    return(
        templateDataFetchError !== "" ?
        <div style={{'paddingTop':'40px'}}>
            Error: {templateDataFetchError}
        </div> :
        <div style={{'paddingTop':'40px'}}>
            <Form onSubmit={(e) => {
                const data = new FormData(e.target);
                dispatch(addDeployment(data))
            }}>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Select Template*</Label>
                            <Input
                            type="select"
                            name="templateObj"
                            id="templateObj"
                            onChange={(e) => {
                                let templateObj = JSON.parse(e.target.value)
                                setVersions([...templateObj.versions]);
                            }}
                        >
                            <option disabled/>
                            {templateData.map((v, i) => (
                                <option key={i} data-options={v.options} value={JSON.stringify(v)}>{v.name}</option>
                            ))}
                        </Input>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Select Version*</Label>
                            <Input
                            type="select"
                            name="version"
                            id="version"
                        >
                            <option disabled/>
                            {versions.map((v, i) => (
                                <option key={i} data-options={v.options} value={v}>{v}</option>
                            ))}
                        </Input>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Enter URL*</Label>
                            <Input
                            type="text"
                            name="url"
                            id="url"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} >
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )

}

export default TemplateForm
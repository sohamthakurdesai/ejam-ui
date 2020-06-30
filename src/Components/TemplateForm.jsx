import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Row, Col, FormGroup, Label, Input, Card, CardBody, CardHeader } from 'reactstrap';
import { addDeployment } from '../actions/applicationActions'

const TemplateForm = () => {
    let { templateData, templateDataFetchError } = useSelector(state => state.applicationReducer);
    const [versions, setVersions] = useState([]);

    const dispatch = useDispatch()

    return(
        templateDataFetchError !== "" ?
        <div className="div-common">
            <Card>
                Error: {templateDataFetchError}
            </Card>
        </div> :
        <div className="div-common">
            <Card>
                <CardHeader>Template Form</CardHeader>
                <CardBody>
                    <Form onSubmit={(e) => {
                        const data = new FormData(e.target);
                        e.preventDefault();
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
                                    defaultValue= {templateData[0]? templateData[0].name: ""}
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
                </CardBody>
            </Card>
        </div>
    )

}

export default TemplateForm
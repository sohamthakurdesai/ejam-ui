import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';

const TemplateForm = () => {
    let { templateData, templateDataFetchError } = useSelector(state => state.applicationReducer);
    const [versions, setVersions] = useState([]);

    if(templateDataFetchError !== "") {
        return(
            <Form>
                Error: {templateDataFetchError}
            </Form>
        )
    } else {
        return(
            <div>
                <Form>
                    <Row>
                        <Col md={3}>
                            <FormGroup>
                                <Label>Select Template</Label>
                                <Input
                                type="select"
                                name="templateName"
                                id="templateName"
                                onChange={(e) => {
                                    let templateObj = JSON.parse(e.target.value)
                                    console.log("templateObj.versions==>", templateObj.versions)
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
                    </Row>
                    <Row>
                        <Col md={3}>
                            <FormGroup>
                                <Label>Select Version</Label>
                                <Input
                                type="select"
                                name="version"
                                id="version"
                                onChange={(e) => {
                                    console.log("e.target.value==>", e.target.value)
                                    // let selectValue = JSON.parse(e.currentTarget.value);
                                    // setVersionList([...selectValue.versions]);
                                }}
                            >
                                <option disabled/>
                                {versions.map((v, i) => (
                                    <option key={i} data-options={v.options} value={JSON.stringify(v)}>{v}</option>
                                ))}
                            </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }

}

export default TemplateForm
import React from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button,Glyphicon} from 'react-bootstrap';

const ExperienceCard = (props)=>{
    return (
        <Form horizontal>
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Job Title
            </Col>
            <Col sm={10}>
            <FormControl id={'workExperience-title-' + props.index} type="text" placeholder="" defaultValue={props.content.title} onChange={props.handleChange}/>
            </Col>
        </FormGroup>
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Corporation
            </Col>
            <Col sm={10}>
            <FormControl id={'workExperience-corporation-' + props.index} type="text" placeholder="" defaultValue={props.content.corporation} onChange={props.handleChange}/>
            </Col>
        </FormGroup>
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Corporation City, State
            </Col>
            <Col sm={10}>
            <FormControl id={'workExperience-cityState-' + props.index} type="text" placeholder="" defaultValue={props.content.cityState} onChange={props.handleChange}/>
            </Col>
        </FormGroup>
        <FormGroup >
            <Col componentClass={ControlLabel} sm={2}>
            Start Date
            </Col>
            <Col sm={10}>
            <FormControl id={'workExperience-startDate-' + props.index} type="text" placeholder="" defaultValue={props.content.startDate} onChange={props.handleChange}/>
            </Col>
        </FormGroup>
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            End Date
            </Col>
            <Col sm={10}>
            <FormControl id={'workExperience-endDate-' + props.index} type="text" placeholder="" defaultValue={props.content.endDate} onChange={props.handleChange}/>
            </Col>
        </FormGroup>
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Responsibilities
            </Col>
            <Col sm={10}>
            <FormControl id={'workExperience-responsibilities-' + props.index} componentClass="textarea" placeholder="" defaultValue={props.content.responsibilities} onChange={props.handleChange}/>
            </Col>
        </FormGroup>
        <FormGroup>
            <Col smOffset={2} sm={10}>
            <Checkbox id={'workExperience-renderAsBullets-' + props.index} defaultChecked={props.content.renderAsBullets} onChange={props.handleCheckboxChange}>Convert to bullet points</Checkbox>
            </Col>
        </FormGroup>
        <FormGroup>
            <Col sm={12}>
                <div className="pull-right">
                    <Button id={'workExperience-removebtn-' + props.index} bsStyle='danger' onClick={()=>props.removeWorkExperience('workExperience',props.index)}><Glyphicon glyph="trash" /></Button>
                </div>
            </Col>
        </FormGroup>
        </Form>
    );
}
export default ExperienceCard;
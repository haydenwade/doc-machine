import React from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button, Glyphicon} from 'react-bootstrap';

const EducationCard = (props)=>{
    return (
        <Form horizontal>
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                School/University
                </Col>
                <Col sm={10}>
                <FormControl id={'education-university-' + props.index} type="text" placeholder="" defaultValue={props.content.university} onChange={props.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                City, State
                </Col>
                <Col sm={10}>
                <FormControl id={'education-cityState-' + props.index} type="text" placeholder="" defaultValue={props.content.cityState} onChange={props.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                Degree
                </Col>
                <Col sm={10}>
                <FormControl id={'education-degree-' + props.index} type="text" placeholder="" defaultValue={props.content.degree} onChange={props.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup >
                <Col componentClass={ControlLabel} sm={2}>
                Year Graduated
                </Col>
                <Col sm={10}>
                <FormControl id={'education-gradYear-' + props.index} type="text" placeholder="" defaultValue={props.content.gradYear} onChange={props.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col sm={12}>
                    <div className="pull-right">
                        <Button id={'education-removebtn-' + props.index} bsStyle='danger' onClick={()=>props.removeEducation('education',props.index)}><Glyphicon glyph="trash" /></Button>
                    </div>
                </Col>
            </FormGroup>
        </Form>
    );
}
export default EducationCard;
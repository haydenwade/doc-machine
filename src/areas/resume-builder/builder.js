import React from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import {Grid, Row, Col, FormGroup, FormControl, Form, Button, Glyphicon} from 'react-bootstrap';
import EducationCard from './education-card';
import ExperienceCard from './experience-card';
import actions from '../../store/resume/actions';
import {emptyEducation, emptyWorkExperience} from '../../store/resume/initial-state';

class ResumeBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = props.content;
    }
    //#region actionhandlers
    generateResume = ()=>{
        this.props.setResumeContent(this.state);
    }
    addEducation = ()=>{
        let newState = Object.assign({},this.state);
        newState.education.push(Object.assign({},emptyEducation));
        this.setState(newState);
    }
    addWorkExperience = ()=>{
        let newState = Object.assign({},this.state);
        newState.workExperience.push(Object.assign({},emptyWorkExperience));
        this.setState(newState);
    }
    removeItemFromArray = (rootPropertyName,index)=>{
        let newState = Object.assign({},this.state);
        newState[rootPropertyName].splice(index,1);
        this.setState(newState);
    }
    //#endregion
    //#region changeHandlers
    handleChange = (e)=>{
        let newState = Object.assign({},this.state);
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }
    handleChangeForArrayItem = (e)=>{
        let newState = Object.assign({},this.state);
        let identifiers = e.target.id.split('-'); //0-root propertyName,1-child propertyName,2-index in array
        const rootPropertyName = identifiers[0];
        const childPropertyName = identifiers[1];
        const index = parseInt(identifiers[2]);

        newState[rootPropertyName][index][childPropertyName] = e.target.value;
        this.setState(newState);
    }
    handleChangeForArrayItemCheckbox = (e)=>{
        let newState = Object.assign({},this.state);
        let identifiers = e.target.id.split('-'); //0-root propertyName,1-child propertyName,2-index in array
        const rootPropertyName = identifiers[0];
        const childPropertyName = identifiers[1];
        const index = parseInt(identifiers[2]);

        newState[rootPropertyName][index][childPropertyName] = e.target.checked;
        this.setState(newState);
    }
    //#endregion
    render(){
        return (
            <Grid>
                 <Row>
                    <Col md={12}>
                    <h3>Candidate Name</h3>
                    <FormControl id="candidateName" type="text" placeholder="" defaultValue={this.props.content.candidateName} onChange={this.handleChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <h3>Technical Skills</h3>
                    <FormControl id="technicalSkills" componentClass="textarea" placeholder="" defaultValue={this.props.content.technicalSkills} onChange={this.handleChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <h3>Education</h3>
                    {
                            this.props.content.education.map((x,i)=>{
                                return (
                                    <EducationCard key={i} index={i} handleChange={this.handleChangeForArrayItem} content={x} removeEducation={this.removeItemFromArray}/>
                                );
                            })
                        }
                        <Button onClick={this.addEducation}><Glyphicon glyph="plus" /></Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h3>Experience</h3>
                        {
                            this.props.content.workExperience.map((x,i)=>{
                                return (
                                    <ExperienceCard key={i} index={i} handleChange={this.handleChangeForArrayItem} 
                                     handleCheckboxChange={this.handleChangeForArrayItemCheckbox} content={x} removeWorkExperience={this.removeItemFromArray}/>
                                );
                            })
                        }
                        <Button onClick={this.addWorkExperience}><Glyphicon glyph="plus" /></Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <Form horizontal>
                        <FormGroup>
                            <Col sm={12}>
                                <div className='pull-right'>
                                    <Link className='btn btn-primary' to='/previewer' onClick={this.generateResume}>Preview</Link>
                                </div>
                            </Col>
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export const mapStateToProps = state => {
    return {
        content: state.resume.content
    };
}
export const mapDispatchToProps = dispatch =>{
    return {
        setResumeContent:(content)=>{
            return dispatch(actions.setResumeContent(content));
        },
        startOver:()=>{
            return dispatch(actions.startOver());
        }
    };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ResumeBuilder));
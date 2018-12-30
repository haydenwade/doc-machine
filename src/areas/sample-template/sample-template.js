import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './extras/styles.scss';
import utils from '../../utils';

export default (props) => {
    return (
        <Grid id='thedoc' className='resume' fluid={true}>
            <Row className='top-row'>
                <Col xs={6} sm={6} md={6}>
                    <img id='companylogo' height={75} src='assets/greatnesscoLogo.png' alt='logo'/>
                </Col>
                <Col xs={6} sm={6} md={6}>
                    <div className="pull-right address">
                        <strong>
                        100 S. Victory Lane<br />
                        Green Bay, Wisconsin 54311<br />
                        TEL: (920)777-9898<br />
                        E-MAIL: recruiters@greatnessco.com
                        </strong>
                    </div>
                </Col>
            </Row>
            <Row className='text-center candidate-name'>
                <Col md={12}>
                    <h4><strong>{props.candidateName}</strong></h4>
                </Col>
            </Row>
            
            <Row className='section-header'>
                <Col md={12}>
                    <h5><strong>Technical Skills</strong></h5>
                </Col>
            </Row>
            <Row className='section-content'>
                <Col md={12}>
                    <br/>
                    {props.technicalSkills}
                    <br/><br/>
                </Col>
            </Row>      
            <Row className='section-header'>
                <Col md={12}>
                    <h5><strong>Professional Experience</strong></h5>
                </Col>
            </Row>
            {
                props.workExperience &&
                props.workExperience.map((x,i)=>{
                    return (
                    <Row key={i} className='section-content'>
                    <Col md={12}>
                    <Row>
                        <Col xs={6} sm={6} md={6}>
                            <br/>
                            <strong>{x.title}</strong><br />
                            {x.corporation} - {x.cityState}
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                            <br/>
                            <strong className="pull-right">{x.startDate} - {x.endDate}</strong>
                        </Col>
                    </Row>
                    {(x.renderAsBullets && x.responsibilities) &&
                        <Row >
                            <Col md={12}>
                                <ul className='bullets'>
                                {
                                    utils.ConvertToBulletList(x.responsibilities).map((text,j)=>{
                                        return (
                                            <li key={j}>{text}</li>
                                        );
                                    })
                                }
                                </ul>
                            </Col>
                        </Row>
                        }
                        {!x.renderAsBullets &&
                        <Row>
                            <Col md={12}>
                                {x.responsibilities}
                            </Col>
                        </Row>
                        }
                        </Col>
                    </Row>
                    );
                })
            }
            <Row className='section-header'>
                <Col md={12}>
                    <h5><strong>Education/Certification</strong></h5>
                </Col>
            </Row>
            {
                props.education &&
                props.education.map((x,i)=>{
                    return (
                        <Row key={i} className='section-content'>
                            <Col xs={6} sm={6} md={6}>
                                <br/>
                                <strong>{x.degree}</strong><br />
                                {x.university} - {x.cityState}
                                <br/><br/>
                            </Col>
                            <Col xs={6} sm={6} md={6} >
                                <br/>
                                <strong className='pull-right'>{x.gradYear}</strong>
                                <br/><br/>
                            </Col>
                        </Row>
                    );
                })
            }
        </Grid>
    );
}
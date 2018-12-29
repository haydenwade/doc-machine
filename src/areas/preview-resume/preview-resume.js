import React from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

import {Grid, Row, Col, Well, Button} from 'react-bootstrap';
import actions from '../../store/resume/actions';
import fetchTemplate from '../../store/templates/thunk';

//BELOW ARE TO TEST QUICKLY FROM UI
import Template from '../sample-template/sample-template';

class PreviewResume extends React.Component{
    componentDidMount(){
        this.props.fetchTemplate();
    }
    render() {
        return (
            <Grid>
                  <div id="myMm" style={{height: "1mm"}} />
                <Row>
                    <Col md={12}>
                        <h1>Preview</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Well>
                            {/* <Template {...this.props.content} /> */}
                            <div dangerouslySetInnerHTML={{__html: this.props.template}}></div>
                        </Well>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Link className='btn btn-primary' to='/builder'>Edit</Link>
                        <Link className='btn btn-primary' to='/export'>Export</Link>
                        <Link className='btn btn-default' to='/builder' onClick={this.props.startOver}>Create Another</Link>                        
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export const mapStateToProps = state => {
    return {
        content: state.resume.content,
        template: state.templates.template
    };
}

export const mapDispatchToProps = dispatch =>{
    return {
        startOver:()=>{
            return dispatch(actions.startOver());
        },
        fetchTemplate:()=>{
            return dispatch(fetchTemplate());
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviewResume));
import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import './extras/styles.scss';
import Footer from '../../components/footer';

export default () => {
    return (
        <Grid>
            <Row>
                <Col md={6} xs={12}>
                    <h1 className='underline-text'>Great documents are created by great tools.</h1><h2><strong>Doc Machine</strong> utilizes first in class technology and customer defined templates to
                    deliver clean and consistent documents.</h2>
                    <Button href='/products' className='drop-shadow' bsSize='large'>Products</Button>
                </Col>
                <Col md={6} xs={12}>
                    <img src='assets/resumecoffee.jpg' alt='picture of a resume, coffee, laptop' height={375}/>
                </Col>
            </Row>
            <Row className='top-padding'>
                <Col md={3} xs={12} className="text-center">
                        <i className="fa fa-sign-in fa-5x"></i>
                        <br />
                        <h4>Step 1: Secure Login</h4>
                        Login into Doc Machine to begin. Email <a href='mailto:voice@haydenwade.com?subject=Sign Me Up &body=Hi, can i get a free trial'>solutions@docmachine.com</a> to get the free trial started.
                    </Col>
                    <Col md={3} xs={12} className="text-center">
                        <i className="fa fa-pencil fa-5x"></i>
                        <br />
                        <h4>Step 2: Data Entry</h4>
                        After signing in you can view existing documents and create new documents. To create a new document you enter the document details
                        in the provided form. You can access this both from your desktop and mobile devices. When ready you can submit for document generation.
                    </Col>
                    <Col md={3} xs={12} className="text-center">
                        <i className="fa fa-cog fa-5x spin"></i>
                        <br />
                        <h4>Step 2: Document Generation</h4>
                        All documents are based off of customer defined templates. We understand that your templates are very important to the success of
                        your business so we keep those secure on our server using RS256 encryption. When you submit your document details we quickly generate
                        a new document in the correct format.
                    </Col>
                    <Col md={3} xs={12} className="text-center">
                        <i className="fa fa-file fa-5x"></i>
                        <br />
                        <h4>Step 3: Completed Documents</h4>
                        Now you have a perfectly formatted document you can send to your client! Using templates means your branding and formatting will be
                        consistent across all documents that are generated.
                    </Col>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Grid>
    )
}

import React from 'react';
import {Grid,Row,Col, Button} from 'react-bootstrap';
import './extras/styles.scss';
import Footer from '../../components/footer';

export default ()=>{
    return (
       <Grid>
           <Row>
               <Col md={12} className='text-center'>
                    <h1>Document Generator</h1>
               </Col>
           </Row>
           <Row className='row-eq-height'>
               <Col md={3} xs={12} className='pricing-block'>
                    <h4>Individual</h4>
                    <ul>
                        <li>1 Template</li>
                        <li>1 Pages Per Template</li>
                        <li>Mobile Access</li>
                        <li>Secure Document Generation</li>
                        <li>1 User Accounts</li>
                    </ul>
                    <div className='text-center'>
                        <Button className='drop-shadow' href='mailto:voice@haydenwade.com?subject=Pricing &body=Hi, can i get a quote for...'>Request Pricing</Button>
                    </div>
               </Col>
               <Col md={3} xs={12} className='pricing-block'>
                    <h4>Startup</h4>
                    <ul>
                        <li>1-2 Templates</li>
                        <li>1-2 Pages Per Template</li>
                        <li>Mobile Access</li>
                        <li>Secure Document Generation</li>
                        <li>10 User Accounts</li>
                    </ul>
                    <div className='text-center'>
                        <Button className='drop-shadow' href='mailto:voice@haydenwade.com?subject=Pricing &body=Hi, can i get a quote for...'>Request Pricing</Button>
                    </div>               </Col>
               <Col md={3} xs={12} className='pricing-block'>
                    <h4>Enterprise</h4>
                    <ul>
                        <li>1-5 Templates</li>
                        <li>1-3 Pages Per Template</li>
                        <li>Mobile Access</li>
                        <li>Secure Document Generation</li>
                        <li>2 Year Document Retention</li>
                        <li>Document Management</li>
                        <li>100 User Accounts</li>
                    </ul>
                    <div className='text-center'>
                        <Button className='drop-shadow' href='mailto:voice@haydenwade.com?subject=Pricing &body=Hi, can i get a quote for...'>Request Pricing</Button>
                    </div>               </Col>
               <Col md={3}  xs={12} className='pricing-block'>
                    <h4>Enterprise Plus</h4>
                    <ul>
                        <li>5+ Templates</li>
                        <li>3+ Pages per Template</li>
                        <li>Mobile Access</li>
                        <li>Secure Document Generation</li>
                        <li>2 Year Document Retention</li>
                        <li>Document Management</li>
                        <li>CRM Integration</li>
                        <li>Unlimited User Accounts</li>
                    </ul>
                    <div className='text-center'>
                        <Button className='drop-shadow' href='mailto:voice@haydenwade.com?subject=Pricing &body=Hi, can i get a quote for...'>Request Pricing</Button>
                    </div>               
                </Col>
           </Row>
           <Row>
               <Footer/>
           </Row>
       </Grid>
    );
}       
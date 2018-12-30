import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './extras/styles.scss';

class AppFooter extends React.Component {
    render() {
        return (
            <Grid className='footer-bkg'>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <ul className="center-pills">
                            <li><a href="" title="Follow me on Instagram!"><span className="fa fa-instagram fa-2x"></span></a></li>
                            <li><a href="" title="Subscribe to my channel on YouTube!"><span className="fa fa-youtube-play fa-2x"></span></a></li>
                            <li><a href="" title="Follow me on Twitter!"><span className="fa fa-twitter fa-2x"></span></a></li>
                            <li><a href="" title="Connect with me on LinkedIn!"><span className="fa fa-linkedin-square fa-2x"></span></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <strong><i className="fa fa-copyright" aria-hidden="true"></i><small>2019 WaWe Inc.</small></strong>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default AppFooter;
import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import About from './../components/common-comments/About';
import Technologies from './../components/home-components/Technologies';

function AboutPage() {
    return <>
        <Helmet>
            <title>About : Brajesh Saini</title>
        </Helmet>
        {/* <ContactSlider /> */}

        <Container fluid className='bg-light py-4 pt-5'>
            <Row>
                <Col md={12} className='text-center'>
                    <h3 className="text-uppercase ps-2">
                        About Us</h3>

                    <div className='divider mb-5'></div>
                </Col>
            </Row>
        </Container>
        <About changeImg='yes'  />
        <Technologies />
    </>
}

export default AboutPage;
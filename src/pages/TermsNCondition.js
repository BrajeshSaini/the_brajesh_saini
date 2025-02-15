
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Technologies from './../components/home-components/Technologies';
import Contact from '../components/common-comments/Contact';

function ContactPage() {

    return <>
        <Helmet>
            <title>Contact : Brajesh Saini</title>
        </Helmet>
        {/* <ContactSlider /> */}

        <Container fluid className='bg-light py-4 pt-5'>
            <Row>
                <Col md={12} className='text-center'>
                    <h3 className="text-uppercase ps-2">
                        Contact Us</h3>

                    <div className='divider mb-5'></div>
                </Col>
            </Row>
        </Container>
        
        <Contact />

        <Technologies />

    </>
}

export default ContactPage;
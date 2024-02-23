import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Experience from "./Experience";
import { Send, Telephone } from 'react-bootstrap-icons';

function ContactBar() {
    return (
        <>
        <Container className='py-4 py-md-5 '>
                <Row className=''>

                    {/* <Col md={4} className='experience position-relative'>
                        <h6 className='primary_txt'>
                        CALL US NOW
                        </h6>
                        <h5>
                            (+91) 963-032-5426 
                        </h5>
                    </Col> */}

                    <Col md={6} lg={4} className='footer_widgets_col text-center text-md-start'>
                        <h5 className='underline_with_heading text-uppercase mb-0 mb-md-3'>
                            Address
                        </h5>

                        <div className='divider mb-4 mt-1 d-block d-md-none'></div>
                        <p>
                            D-7, Plot No 74, Workspace.city,   <br /> zone-2, M. P. Nagar,  <br /> Bhopal, M.P. 462011
                        </p>
                    </Col>


                    <Col lg={4} className='d-none d-lg-block'>
                        <Experience />
                    </Col>

                    <Col md={6} lg={4} className='footer_widgets_col text-center text-md-start mb-3 mb-md-0'>
                        <h5 className='underline_with_heading text-uppercase  mb-0 mb-md-3'>
                            Contact Us
                        </h5>
                        <div className='divider mb-4 mt-1 d-block d-md-none'></div>
                        <ul className='ps-0 nav flex-column'>
                            <li>
                                <Send className='primary_txt me-2' /> contact@thebrajeshsaini.com
                            </li>
                            <li className='mt-2'>
                                <Telephone className='primary_txt me-2' /> (+91) 724-097-9960
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ContactBar;
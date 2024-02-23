import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
import { Send, Telephone, PinMap } from 'react-bootstrap-icons';

function Contact() {

    let [isMailResponse, setIsMailResponse] = useState(false);
    let [mailResponseMsg, setMailResponseMsg] = useState('');
    let [disabledContactBtn, setDisabledContactBtn] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabledContactBtn(true);
        // Send form data to the PHP script
        fetch('https://thebrajeshsaini.com/php_mail/contact.php', {
            // fetch('contact.php', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                //   'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((response) => {
                if (response.ok) {

                    // After a successful submission, reset the form fields.
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });

                    // Handle success

                    // console.log('Email sent successfully');
                    setMailResponseMsg('Your Message Sent Successfully.');

                    // If the submission is successful, set the success state to true.
                    setIsMailResponse(true);
                    setTimeout(() => {
                        setMailResponseMsg('')
                        setIsMailResponse(false);
                        setDisabledContactBtn(false);
                    }, 1500);




                } else {
                    // Handle errors
                    // console.error('Failed to send email');

                    setMailResponseMsg('Failed to send email');
                    setIsMailResponse(true);
                    setTimeout(() => {
                        setMailResponseMsg('');
                        setIsMailResponse(false);
                        setDisabledContactBtn(false);
                    }, 1500);

                }
            });
    };



    return <>


        <Container className='py-4 py-md-5 contact_from_container'>
            <Row className='align-items-center'>


                <Col lg={{ span: 4, offset: 0 }} className="text-start text-center text-lg-start  pt-0 pb-4 pb-sm-5 py-sm-5 py-xl-0">
                    <h3 className="text-uppercase underline_with_heading  mb-lg-3">

                        Quick Contact
                        <span className="d-block">
                            Details
                        </span>
                    </h3>
                    <div className='divider mb-4 mt-1 d-block d-lg-none'></div>

                    <ul className='ps-0 nav flex-column pt-4'>
                        <li>
                            <Row>
                                <Col lg={1} className='mb-2 mb-lg-0'>
                                    <Send className='primary_txt me-2' />
                                </Col>
                                <Col className='text-uppercase'>
                                    contact@thebrajeshsaini.com
                                </Col>
                            </Row>

                        </li>
                        <li className='my-2'>
                            <Row>
                                <Col lg={1} className='mb-2 mb-lg-0'>
                                    <Telephone className='primary_txt me-2' />
                                </Col>
                                <Col>
                                    (+91) 724-097-9960
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col lg={1} className='mb-2 mb-lg-0'>
                                    <PinMap className='primary_txt me-2' />
                                </Col>
                                <Col className='text-uppercase'>
                                    D-7, PLOT NO 74, WORKSPACE.CITY,
                                    ZONE-2, M. P. NAGAR,
                                    BHOPAL, M.P. 462011
                                </Col>
                            </Row>

                        </li>
                    </ul>
                </Col>
                <Col lg={{ span: 6, offset: 1 }} className='text-center'>
                    {isMailResponse && (
                        <Alert variant={isMailResponse ? 'success' : 'danger'}>
                            {mailResponseMsg}
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit} method="POST">

                        <FloatingLabel controlId="floatingPassword" label="Name" className="mb-3"  >
                            <Form.Control type="text" name="name"
                                value={formData.name}
                                onChange={handleInputChange} placeholder="Full Name" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" name="email"
                                value={formData.email}
                                onChange={handleInputChange} placeholder="name@example.com" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </FloatingLabel>


                        <FloatingLabel controlId="floatingTextarea2" label="Message" >
                            <Form.Control
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                as="textarea"
                                placeholder="Leave a message here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>


                        <Button 
                            variant="primary" 
                            name="sendContactInfo" 
                            type="submit" 
                            className='tbs_btn tbs_outline_primary_btn mt-3'
                            disabled={disabledContactBtn}
                        >
                            <span>
                                Submit
                            </span>
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        {/* <Technologies /> */}
    </>
}

export default Contact;
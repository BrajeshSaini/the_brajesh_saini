import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './../../assets/images/logo.png';
import { Facebook, Linkedin } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
function Footer() {
    return (
        <>
            <Container className=" py-5">
                <Row className="align-items-center slider_details">
                    <Col md={12} className="text-center">
                        
                        <Image src={logo} className="footer_logo mb-3" />
                        <h4>
                            Follow Me
                        </h4>
                    
                        <ListGroup horizontal className="justify-content-center my-3">
                            <ListGroup.Item> <Facebook /> Facebook</ListGroup.Item>
                            {/* <ListGroup.Item>ListGroup</ListGroup.Item> */}
                            <ListGroup.Item>  <Linkedin /> Linkedin</ListGroup.Item>
                            {/* <ListGroup.Item>horizontally!</ListGroup.Item> */}
                        </ListGroup>
                   
                        <Row className="align-items-center slider_details">
                            <Col className="text-center text-sm-start">
                                <small className="text-center">
                                    Terms and conditons
                                </small>
                            </Col>
                            <Col className="text-center text-sm-end">
                                <small className="text-center text-sm-center">
                                    The Brajesh Saini &copy;  2024 All Right Reserved.
                                </small>
                            </Col>
                        </Row>
                        {/* <small className="text-center">
                            The Brajesh Saini &copy;  2024 All Right Reserved.
                        </small> */}
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Footer;
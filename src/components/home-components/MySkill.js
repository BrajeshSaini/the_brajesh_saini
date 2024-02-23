import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import convertPSDToHTML from './../../assets/images/services/convert-psd-to-html.jpg';
import webWithResponsive from './../../assets/images/services/web_with_responsive.jpg';
import hybridDevelopment from './../../assets/images/services/hybrid_development.jpg';

function MySkill() {

    return (
        <>
            <Container className='py-4 pb-md-5 pt-md-0  '>
                <Row>
                    <Col className=''>
                        {/* Most Popular Front End Technologies */}
                        <Row className=''>
                            <Col className='mt-3 mt-sm-4'>
                                <Row className='justify-content-center'>
                                    {/* CONVERT UI/UX DESIGN TO WEB DESIGN */}
                                    <Col md={6} lg={4} className='mb-4'>
                                        {/* <Card className='w-100' style={{ width: '18rem' }}> */}
                                        <Card className='w-100'>
                                            <Card.Img variant="top" src={convertPSDToHTML} />
                                            <small className="grey_txt d-block text-center" >
                                                <a className="grey_txt" href="https://www.freepik.com/free-vector/programming-concept-illustration_7118758.htm#fromView=search&term=psd+to+html&page=2&position=8&track=ais&regularType=vector">Image by storyset</a> on Freepik</small>

                                            <Card.Body className='text-center card-body position-absolute w-100 h-100 '>
                                                <Card.Title className='w-100'>
                                                    <div className='divider mb-4'></div>
                                                    <h4>
                                                        CONVERT UI/UX DESIGN TO WEB DESIGN
                                                    </h4>
                                                    <div className='divider mb-5'></div>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {/* WEB & APP DEVELOPMENT */}
                                    <Col md={6} lg={4} className='mb-4'>
                                        <Card className='w-100 position-relative'>
                                            <Card.Img variant="top" src={hybridDevelopment} />
                                            <small className="grey_txt d-block text-center" >
                                                <a className="grey_txt" href="https://www.freepik.com/free-vector/desktop-smartphone-app-development_10276838.htm#fromView=search&term=WEB+and+APP+DEVELOPMENT&page=1&position=1&track=ais&regularType=vector">
                                                    Image by Freepik</a>
                                            </small>
                                            <Card.Body className='text-center card-body position-absolute w-100 h-100 '>
                                                <Card.Title className='w-100'>
                                                    <div className='divider mb-4'></div>
                                                    <h4>
                                                        WEB & APP DEVELOPMENT
                                                    </h4>
                                                    <div className='divider mb-5'></div>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {/* WEB DESIGN WITH RESPONSIVE */}
                                    <Col md={6} lg={4}>
                                        <Card className='w-100'>

                                            <Card.Img variant="top" src={webWithResponsive} />
                                            <small className="grey_txt d-block text-center" >
                                                <a className="grey_txt" href="https://www.freepik.com/free-vector/website-building-web-graphic-interface-design-responsive-website-software-engineering-development-male-programmeer-cartoon-character-vector-isolated-concept-metaphor-illustration_12083503.htm#fromView=search&term=web+responsive&page=1&position=1&track=ais&regularType=vector">Image by vectorjuice</a> on Freepik </small>
                                            <Card.Body className='text-center card-body position-absolute w-100 h-100 '>
                                                <Card.Title className='w-100'>
                                                    <div className='divider mb-4'></div>
                                                    <h4>
                                                        WEB DESIGN WITH RESPONSIVE
                                                    </h4>
                                                    <div className='divider mb-5'></div>
                                                </Card.Title>
                                            </Card.Body>

                                        </Card>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default MySkill;
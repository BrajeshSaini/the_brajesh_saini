import React from 'react';
import Slider from '../components/home-components/Slider';
import Technologies from '../components/home-components/Technologies';
// import Technology from './home-components/Technology';
import MySkill from '../components/home-components/MySkill';
import ContactBar from '../components/common-comments/ContactBar';
import Contact from '../components/common-comments/Contact';
import About from '../components/common-comments/About';
import Portfolio from '../components/common-comments/Portfolio';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {


    return (
        <>
            <Slider />
            <div className='divider mb-3 mb-md-0'></div>

            <About changeImg='no' />

            {/* <Technology /> */}
            <Container className='mt-4 mt-md-5'>

                <Row>

                    <Col md={12} className='text-center'>
                        <h3 className="text-uppercase ps-2">
                            My Skills</h3>

                        <div className='divider mb-5'></div>
                    </Col>
                </Row>
            </Container>

            <MySkill />

            <Container className=" py-4 py-md-0  my_self_container d-none">
                <Row className="align-items-center ">
                    <Col xl={3} xxl={4} className="text-start">
                        <h3 className="text-uppercase text-center text-xl-start ">
                            <span>
                                LET’S
                            </span>
                            <span className='d-block my-1 my-lg-0'>
                                INTRODUCE ABOUT
                            </span>
                            <span>
                                MYSELF
                            </span>

                        </h3>
                    </Col>
                    <Col xl={6}>
                        <p>
                            Hi, I'M Brajesh Saini. A Freelancer Software, Website, Web App & Hybid App Developer. I have professional Experience and Specializing in Web & App Development.
                        </p>

                    </Col>

                    <Col xl={3} xxl={2} className="text-center text-xl-end">
                        <Button variant="primary" className="tbs_btn tbs_outline_primary_btn mt-3 ">
                            <span>
                                Contact Me
                            </span>
                        </Button>{' '}
                    </Col>


                </Row>
            </Container>

            <ContactBar />

            <Portfolio />

            <div className='divider mb-3 mb-md-0'></div>

            <Contact />
            
            <Technologies />


        </>
    )
}

export default Home;

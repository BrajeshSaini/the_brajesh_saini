// import { useHistory } from "react-router-dom";                  ///  React Router v5, 
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Experience from './Experience';
import mySelf from './../../assets/images/about/brajesh_saini.png';
import mySelf2 from './../../assets/images/about/my_self_2.jpg';

function About(props) {
    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/contact`;
        navigate(path);
    }

    return <>
        <Container className=" py-4 py-md-5 pb-md-0 pb-0 my_self_container">
            <Row className='align-items-center'>
                {/* <Col md={3}> */}
                <Col md={6} lg={3} className='order-2 order-md-2 order-lg-1'>

                    <Experience />
                </Col>
                <Col md={6} lg={5} className="text-center text-md-start order-1 order-md-1 order-lg-2">
                    <Image src={props.changeImg === 'no' ? mySelf : mySelf2} className='w-100 my_self_img' />

                    {props.changeImg === 'yes' &&

                        <small className="grey_txt d-block text-center mb-5" >
                            Photo by <a className="grey_txt" href="https://www.freepik.com/free-vector/microsite-development-abstract-concept-illustration-microsite-web-development-small-internet-site-graphic-design-service-landing-page-software-programming-team_10780317.htm#query=custom%20software&position=11&from_view=keyword&track=ais">Image by vectorjuice</a> on Freepik
                        </small>
                    }
                </Col>

                <Col lg={{ span: 4, offset: 0 }} className="text-start order-md-3  text-center text-lg-start  pt-0 pb-4 pb-sm-5 py-sm-5 py-xl-0">
                    <h3 className="text-uppercase mb-3">

                        <span>
                            LET’S
                        </span>
                        <span className='d-block my-1'>
                            INTRODUCE ABOUT
                        </span>
                        <span>
                            MYSELF
                        </span>


                    </h3>
                    <p>
                        Hi, I'M Brajesh Saini. A Freelancer Software, Website, Web App & Hybid App Developer. I have professional Experience and Specializing in Web & App Development.
                    </p>
                    <Button onClick={routeChange} variant="primary" className="tbs_btn tbs_primary_btn mt-3 ">
                        <span>
                            Contact Me
                        </span>
                    </Button>{' '}
                </Col>


            </Row>
            <Row className="align-items-center mt-5 d-none">
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
    </>
}

export default About;
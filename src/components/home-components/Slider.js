import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// Image 
import bgBnner from './../../assets/images/slider/bg_banner.jpg';

function Slider() {

    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/contact`;
        navigate(path);
    }
    
    return (
        <>
            {/* <Container fluid className="slider_section"> */}
            <Container className="slider_section py-4 py-sm-5">
                {/* <div className="slider_overlay"></div> */}
                <Row className="align-items-center slider_details">

                    {/* <Col xs={2} sm={3} md={4}  lg={6} xl={7} xxl={8}> */}
                    <Col md={6} className="slider_desc text-center text-md-start mb-4 mb-sm-5 mb-md-0 ">
                        <h3 className="text-uppercase mb-0 mb-md-2">
                            Hello ,
                        </h3>
                        <div className='divider d-block d-md-none divider d-block d-md-none mt-sm-1 mb-sm-3'></div>
                        <h1 className="text-uppercase py-1 mt-3 mt-sm-0 ">
                            I am Brajesh Saini
                        </h1>
                        <h5 className="text-uppercase mb-0 mb-sm-2">
                            A Senior Web Developer
                        </h5>
                        <Button onClick={routeChange} variant="primary" className="tbs_btn tbs_primary_btn mt-3 ">
                            <span>
                                Contact Me
                            </span>
                        </Button>{' '}
                    </Col>
                    <Col md={6} className="text-center">
                        <Image src={bgBnner} className="me_img" thumbnail />
                        <small className="grey_txt d-block text-center" >
                            Photo by <a className="grey_txt" href="https://unsplash.com/@clemhlrdt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clément Hélardot</a> on <a className="grey_txt" href="https://unsplash.com/photos/black-and-silver-laptop-computer-on-table-95YRwf6CNw8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                        </small>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Slider;
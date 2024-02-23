import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import angularIcon from './../../assets/images/technologies/angular.png';
import ionicIcon from './../../assets/images/technologies/ionic.png';
import reactIocn from './../../assets/images/technologies/react-js.png';
import html5Icon from './../../assets/images/technologies/html_5.png';
import css3Icon from './../../assets/images/technologies/css_3.png';
import javaScriptIcon from './../../assets/images/technologies/java_script.png';
import wordpressIcon from './../../assets/images/technologies/wordpress.png';
import expressJSIcon from './../../assets/images/technologies/nodejs-icon.png';
import mongoDBIcon from './../../assets/images/technologies/mongo_db.svg';
// import codeigniterIcon from './../assets/technologies/codeigniter_3.png';
import mySQLIcon from './../../assets/images/technologies/my_sql.png';
import strAPIIcon from './../../assets/images/technologies/strapi.png';
import phpIocn from './../../assets/images/technologies/php.png';

import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Technologies() {

    let options = {
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2500,

        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    }




    return (
        <>

            <Container fluid className="bg-light py-5">
                <Container>
                    <Row className="align-items-center slider_details">
                        <Col lg={3} className="text-center text-lg-start">
                            <h3 className="text-uppercase ">
                                Technologies <br />
                            </h3>
                            <p>I am using For Web & App Development.</p>
                        </Col>
                        <Col lg={9}>
                            <Container fluid className='bg-light'>
                                <Container>
                                    <Row>
                                        <Col>
                                            {/* // className "owl-theme" is optional */}
                                            <OwlCarousel className='owl-theme technology' {...options} >
                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={angularIcon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={reactIocn}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>



                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={mongoDBIcon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>


                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={expressJSIcon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={ionicIcon}
                                                            alt=""
                                                            className=' p-2'
                                                        />
                                                    </div>
                                                </div>


                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={phpIocn}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={mySQLIcon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={wordpressIcon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={strAPIIcon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={html5Icon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={css3Icon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='item'>
                                                    <div className='image_col text-center'>
                                                        <Image
                                                            src={javaScriptIcon}
                                                            alt=""
                                                            className='p-2'
                                                        />
                                                    </div>
                                                </div>



                                            </OwlCarousel>
                                        </Col>
                                    </Row>
                                </Container>

                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>




        </>
    )
}
export default Technologies;
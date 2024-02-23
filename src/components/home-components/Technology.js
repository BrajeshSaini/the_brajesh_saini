


import angularIcon from './../../assets/images/technologies/angular.png';
import ionicIcon from './../../assets/images/technologies/ionic.png';
import reactIocn from './../../assets/images/technologies/react-js.png';
import html5Icon from './../../assets/images/technologies/html_5.png';
import css3Icon from './../../assets/images/technologies/css_3.png';
import javaScriptIcon from './../../assets/images/technologies/java_script.png';
import wordpressIcon from './../../assets/images/technologies/wordpress.png';
import expressJSIcon from './../../assets/images/technologies/nodejs-icon.png';

// import codeigniterIcon from './../assets/technologies/codeigniter_3.png';
import mySQLIcon from './../../assets/images/technologies/my_sql.png';
import strAPIIcon from './../../assets/images/technologies/strapi.png';
import phpIocn from './../../assets/images/technologies/php.png';




import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

function Technology() {

    return (
        <>

            <Container className='py-5'>

                <Row>
                    <Col className='technology'>
                        {/* Most Popular Front End Technologies */}
                        <Row className=''>
                            <Col md={4} className=''>
                                <h5 className="underline_with_heading text-capitalize ps-2">
                                    Popular  Technologies
                                    <br />
                                    in Frontend </h5>
                            </Col>

                            <Col md={8}>
                                <Row>
                                    {/* React */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={reactIocn}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>

                                    {/* Ionic */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={ionicIcon}
                                                alt=""
                                                className='w-100 h-auto p-2'
                                            />
                                        </div>
                                    </Col>

                                    {/* Angular */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={angularIcon}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>


                                </Row>
                            </Col>
                        </Row>
                        {/* Most Popular Front End Technologies */}
                        <Row className=''>
                            <Col md={4}>
                                <h5 className="underline_with_heading text-capitalize">
                                    Popular  Technologies in
                                    <br />
                                    Backend & Database</h5>
                            </Col>

                            <Col md={8}>
                                <Row className=''>
                                    {/* Express JS */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={expressJSIcon}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>

                                    {/* PHP */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={phpIocn}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>

                                    {/* Mongo DB */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={mongoDBIcon}
                                                alt=""
                                                className='w-100 h-auto p-2'
                                            />
                                        </div>
                                    </Col>
                                    {/* MySql */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={mySQLIcon}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* Most Popular Front End Technologies */}
                        <Row className=''>
                            <Col md={4}>
                                <h5 className="underline_with_heading text-capitalize">
                                    Other Technologies
                                    <br />
                                    I know </h5>
                            </Col>

                            <Col md={8}>
                                <Row className=''>

                                    {/* WordPress */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={wordpressIcon}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>

                                    {/* StrAPI */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={strAPIIcon}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>

                                    {/* HTML */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={html5Icon}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>

                                    {/* CSS */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={css3Icon}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
                                    </Col>

                                    {/* Java Script */}
                                    <Col sm={4}>
                                        <div className='image_col text-center mb-3'>
                                            <Image
                                                src={javaScriptIcon}
                                                alt=""
                                                className='p-2'
                                            />
                                        </div>
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
export default Technology;
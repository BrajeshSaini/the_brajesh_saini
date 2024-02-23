import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import './Portfolio.css';
import './../../assets/css/Portfolio.css';


import ImageGallery from "react-image-gallery";
// View Image
import portfolio_ing_1 from './../../assets/images/portfolio/p_i_1.png';
import portfolio_ing_2 from './../../assets/images/portfolio/p_i_2.png';
import portfolio_ing_3 from './../../assets/images/portfolio/p_i_3.png';
import portfolio_ing_4 from './../../assets/images/portfolio/p_i_4.png';
import portfolio_ing_5 from './../../assets/images/portfolio/p_i_5.png';
// Big Image
import portfolio_1 from './../../assets/images/portfolio/big/p_1.jpg';
import portfolio_2 from './../../assets/images/portfolio/big/p_2.jpg';
import portfolio_3 from './../../assets/images/portfolio/big/p_3.jpg';
import portfolio_4 from './../../assets/images/portfolio/big/p_4.jpg';
import portfolio_5 from './../../assets/images/portfolio/big/p_5.jpg';
/*
     {
         original: "https://picsum.photos/id/1018/1000/600/",
         thumbnail: "https://picsum.photos/id/1018/250/150/",
         thumbnailClass : 'portfolio_thumbnail',
       //   thumbnailTitle : 'HTML',
       //   thumbnailLabel : 'Fully Develop in HTML',
         originalClass : 'portfolio',
       //   originalTitle :  'HTML',
       //   thumbnailLabel : 'Fully Develop in HTML',
       }
    */
const images = [

    {
        original: portfolio_ing_1,
        thumbnail: portfolio_1,
        thumbnailClass: 'portfolio_thumbnail',
        originalClass: 'portfolio',
        sizes: "130px"
    },

    {
        original: portfolio_ing_2,
        thumbnail: portfolio_2,
        thumbnailClass: 'portfolio_thumbnail',
        originalClass: 'portfolio',
    },


    {
        original: portfolio_ing_3,
        thumbnail: portfolio_3,
        thumbnailClass: 'portfolio_thumbnail',
        originalClass: 'portfolio',
    },

    {
        original: portfolio_ing_4,
        thumbnail: portfolio_4,
        thumbnailClass: 'portfolio_thumbnail',
        originalClass: 'portfolio',
    },
    {
        original: portfolio_ing_5,
        thumbnail: portfolio_5,
        thumbnailClass: 'portfolio_thumbnail',
        originalClass: 'portfolio',
    },


];


function Portfolio() {

    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/contact`;
        navigate(path);
    }

    return (
        <>
            <Container className='portfolio_container py-4 py-sm-5'>
                <Row className='align-items-center'>


                    <Col lg={{ span: 4, offset: 0 }} className="text-start text-center text-lg-start  pt-0 pb-4 pb-sm-5 py-sm-5 py-xl-0">
                        <h3 className="text-uppercase underline_with_heading  mb-lg-3">

                            QUALITY WORK
                            <span className="d-block">
                                By mySelf
                            </span>

                        </h3>
                        <div className='divider mb-4 mt-1 d-block d-lg-none'></div>
                        <p className='text-uppercase pt-1'>
                            Project Type - Web App, Dynamic Webiste & Static Website.
                        </p>
                        <Button onClick={routeChange} variant="primary" className="tbs_btn tbs_outline_primary_btn mt-lg-3">
                            <span>
                                Contact Me
                            </span>
                        </Button>{' '}
                    </Col>

                    <Col lg={{ span: 6, offset: 1 }}>

                        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} autoPlay={true} disableKeyDown={false} thumbnailPosition={'bottom'} showNav={true} lazyLoad={true}
                        />
                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default Portfolio;
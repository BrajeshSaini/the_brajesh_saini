import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portfolio from '../components/common-comments/Portfolio';
import Technologies from '../components/home-components/Technologies';

function PortfolioPage() {
    return (
        <>
            <Helmet>
                <title>Portfolio : Brajesh Saini</title>
            </Helmet>
            <Container fluid className='bg-light py-4 pt-5'>
                <Row>
                    <Col md={12} className='text-center'>
                        <h3 className="text-uppercase ps-2">
                            Portfolio</h3>

                        <div className='divider mb-5'></div>
                    </Col>
                </Row>

            </Container>
            <Portfolio />
            <Technologies />
        </>
    )
}
export default PortfolioPage;
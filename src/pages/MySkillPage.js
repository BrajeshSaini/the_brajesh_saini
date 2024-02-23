import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MySkill from '../components/home-components/MySkill';
import Technologies from '../components/home-components/Technologies';
import Contact from '../components/common-comments/Contact';

function MySkillPage() {
    return (
        <>
            <Helmet>
                <title>Services : thebrajeshsaini.com </title>
            </Helmet>
            <Container fluid className='bg-light py-4 pt-5'>


                <Row>
                    <Col md={12} className='text-center'>
                        <h3 className="text-uppercase ps-2">
                            My Skills</h3>

                        <div className='divider mb-5'></div>
                    </Col>
                </Row>

            </Container>
            <MySkill />
            <div className='divider mb-3 mb-md-0'></div>
            <Contact />
            <Technologies />
        </>
    )
}
export default MySkillPage;
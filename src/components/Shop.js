// Bootstrap elements
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Images used in section
import playStationImage from '../images/assets/PlayStation 5.jpg';
import ps5 from '../images/shop footer/ps5.jpg';
import camera from '../images/shop footer/camera.jpg';
import controllers from '../images/shop footer/controllers.jpg';
import edge from '../images/shop footer/edge.jpg';
import headphones from '../images/shop footer/headphones.jpg';
import mediaRemote from '../images/shop footer/media remote.png';
import consoles from '../images/shop footer/consoles.jpg';
// Components
import SectionFooter from './SectionFooter';

// Object array for Section Footer
const shopItems = [
    {
        url: ps5,
        id: 0,
        class: "shop-footer-item",
        caption: "PS5 Console"
    }, {
        url: controllers,
        id: 1,
        class: "shop-footer-item",
        caption: "DualSense™ Wireless Controller"
    }, {
        url: headphones,
        id: 2,
        class: "shop-footer-item",
        caption: "PULSE 3D™ Wireless Headset"
    }, {
        url: edge,
        id: 3,
        class: "shop-footer-item",
        caption: "DualSense Edge"
    }, {
        url: mediaRemote,
        id: 4,
        class: "shop-footer-item",
        caption: "Media Remote"
    }, {
        url: camera,
        id: 5,
        class: "shop-footer-item",
        caption: "HD Camera"
    }, {
        url: consoles,
        id: 6,
        class: "shop-footer-item",
        caption: "PS5 Console Covers"
    },
] 

function Shop() {
    return (
        <section className='shop'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col md={5} >
                        <h1 className='mb-4'>PlayStation 5 Console</h1>
                        <h4 className='mb-4'>Experience an all-new generation of incredible PlayStation games.</h4>
                        <div className='buttons'>
                            <Button id='shop-btn-primary' variant='primary'>Learn More</Button>
                            <Button id='shop-btn-secondary' variant='primary'>Buy Now</Button>
                        </div>
                    </Col>
                    <Col md={7}>
                        <img src={playStationImage} />
                    </Col>
                </Row>
            </Container>
            <div className='shop-footer my-5'>
                <SectionFooter arr={shopItems}/>
            </div>
        </section>
    )
}

export default Shop;
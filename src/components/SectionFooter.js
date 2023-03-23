// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// SectionFooter receives props in the form of an object. The object containers an image url, id, className and caption.
function SectionFooter(props) {
    const images = props.arr;
    let imageArr;
    // imageArr is populated with a new array when called. The array creates a new column with the card info.
    imageArr = images.map((imageObj) =>
        <Col md key={imageObj.id} className={imageObj.class}>
            <Card.Img src={imageObj.url} />
            <Card.Body>
                <Card.Title>{imageObj.caption}</Card.Title>
            </Card.Body>
        </Col>
    );

    return (
        <Container fluid="md">
            {/* The content from imageArr is stored inside a inline flex row. */}
            <Row>
                {imageArr}
            </Row>
        </Container>
    );
};

export default SectionFooter
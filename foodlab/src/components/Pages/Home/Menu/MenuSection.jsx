import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hTag from '../../../../assets/img/h-tag.png';
import leftLine from '../../../../assets/img/y-left-s.png';
import rightLine from '../../../../assets/img/y-right-s.png';
import '../../../../assets/styles/menu-section.css';

export default function MenuSection() {
  return (
    <section className="menu-section">
      <Container className='container-lg' fluid>
        <div className='d-flex flex-column align-items-center mt-2 menu-section-text-container'>
          <Row>
            <h2 className='text-center'>Check Our Delicious Menu</h2>
          </Row>
          <Row className='mb-2'>
            <p className='text-center menu-section-text text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipiscing
              elit do eiusmod tempor incididunt ut labore.</p>
          </Row>
          <Row className='menu-section-figure mb-5'>
            <Col className='d-flex align-items-center'>
              <Image src={leftLine} />
            </Col>
            <Col className='d-flex justify-content-center'>
              <Image src={hTag} />
            </Col>
            <Col className='d-flex align-items-center'>
              <Image src={rightLine} />
            </Col>
          </Row>
        </div>
        <Row className='men-section-card'>
          <Col className='mb10 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb10 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb10 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb10 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

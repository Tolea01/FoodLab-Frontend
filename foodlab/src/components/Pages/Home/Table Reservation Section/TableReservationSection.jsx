import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import reservationSectionImg from '../../../../assets/img/reservation-section-img.jpg';
import chefImg from '../../../../assets/img/chef1-1.png';
import '../../../../assets/styles/table-reservation-section.css';

export default function TableReservationSection() {
  return (
    <Container fluid>
      <Row className='reservation-section'>
        <Col className='col-left' sm={12} md={7}>
          <div>
            <Image src={reservationSectionImg} fluid />
          </div>
          <figure className='position-relative'>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="img position-absolute">
              <Image src={chefImg} />
            </div>
          </figure>
        </Col>
        <Col className='col-right' sm={12} md={5}>
          <div className='reservation-section-img' />
        </Col>
      </Row>
    </Container >
  )
}

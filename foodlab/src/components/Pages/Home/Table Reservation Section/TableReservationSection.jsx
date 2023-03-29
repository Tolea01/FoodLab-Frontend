import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import reservationSectionImg from '../../../../assets/img/reservation-section-img.jpg';
import RotatedImage from '../../../Template/RotatedImage';
import imgPlate1 from '../../../../assets/img/c-1.png';
import imgPlate2 from '../../../../assets/img/c-4.png';
import imgPlate3 from '../../../../assets/img/c-5.png';
import imgPlate4 from '../../../../assets/img/c-6.png';
import '../../../../assets/styles/table-reservation-section.css';

export default function TableReservationSection() {
  return (
    <Container fluid>
      <Row className='reservation-section'>
        <Col sm={12} md={7} className='col-left position-relative'>
          <div className='d-sm-block d-md-none'>
            <Image src={reservationSectionImg} fluid />
          </div>
          <figure className="circle position-absolute">
            <div className='rotated-image-container'>
              <RotatedImage zIndex='2' position='absolute' top='0' left='0' width='30%' img={imgPlate1} />
              <RotatedImage zIndex='2' position='absolute' top='0' right='0' width='30%' img={imgPlate2} />
              <RotatedImage zIndex='2' position='absolute' bottom='0' left='0' width='30%' img={imgPlate3} />
              <RotatedImage zIndex='2' position='absolute' bottom='0' right='0' width='30%' img={imgPlate4} />
            </div>
            <div className="inner-circle position-absolute"></div>
            <div className="middle-circle position-absolute"></div>
            <div className="outer-circle position-absolute z-1"></div>
          </figure>
        </Col>
        <Col sm={12} md={5} className='col-right'>
          <div className='reservation-section-img'>
            <Row>
              <Col className='reservation-section-form'>
                <h2 className='mb-3'>Reserve Your Table</h2>
                <Form.Floating className="mb-4">
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="input your name"
                  />
                  <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>

                <Form.Floating className="mb-4">
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="input your phone"
                  />
                  <label htmlFor="floatingPasswordCustom">Phone</label>
                </Form.Floating>

                <FloatingLabel className='mb-4' controlId="floatingSelect" label="Party Type">
                  <Form.Select aria-label="Floating label select example">
                    <option>Select party type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </Form.Select>
                </FloatingLabel>

                <Form.Floating className="mb-4">
                  <Form.Control
                    id="floatingInputCustom"
                    type="number"
                    placeholder="input number of person"
                  />
                  <label htmlFor="floatingInputCustom">Person</label>
                </Form.Floating>

                <Form.Floating className="mb-4">
                  <Form.Control
                    id="floatingInputCustom"
                    type="date"
                    placeholder="input date"
                  />
                  <label htmlFor="floatingInputCustom">Date</label>
                </Form.Floating>
                <Row>
                  <Button size='lg' variant="primary" type='submit'>Book Now!</Button>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

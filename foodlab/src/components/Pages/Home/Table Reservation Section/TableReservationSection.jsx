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
  const positions = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, left: 0 },
    { bottom: 0, right: 0 },
  ]

  const images = [imgPlate1, imgPlate2, imgPlate3, imgPlate4];

  const renderInputs = (typeOfInput, placeholder, text) => {
    return (
      <Form.Floating className="mb-4">
        <Form.Control
          id="floatingInputCustom"
          type={typeOfInput}
          placeholder={placeholder}
          className='inputs'
        />
        <label className='inputs-text' htmlFor="floatingInputCustom">{text}</label>
      </Form.Floating>
    )
  }

  return (
    <Container fluid>
      <Row className='reservation-section'>
        <Col sm={12} md={7} className='col-left position-relative'>
          <div className='d-sm-block d-md-none'>
            <Image src={reservationSectionImg} fluid />
          </div>
          <figure className="circle position-absolute">
            <div className='rotated-image-container'>
              {
                positions.map((position, index) => {
                  return (
                    <RotatedImage
                      key={index}
                      zIndex='2'
                      position='absolute'
                      {...position}
                      width='30%'
                      img={images[index]}
                    />
                  )
                })
              }
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
                {renderInputs('text', 'input your name', 'Name')}
                {renderInputs('text', 'input your phone', 'Phone')}
                <FloatingLabel className='mb-4' controlId="floatingSelect" label="Party Type">
                  <Form.Select className='inputs' aria-label="Floating label select example">
                    <option>Select party type</option>
                    <option value="Wedding party">Wedding party</option>
                    <option value="Christening party">Christening party</option>
                    <option value=" Birthday party"> Birthday party</option>
                    <option value="Engagement party">Engagement party</option>
                    <option value="Graduation party">Graduation party</option>
                    <option value="Christmas party">Corporate party</option>
                  </Form.Select>
                </FloatingLabel>
                {renderInputs('number', 'input your number', 'Person')}
                {renderInputs('date', 'input date', 'Date')}
                <Row>
                  <Button className='inputs-button p-3' size='lg' variant="primary" type='button'>Book Now!</Button>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

import React, { useState } from 'react';
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
import axios from 'axios';
import '../../../../assets/styles/table-reservation-section.css';

export default function TableReservationSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [partyType, setPartyType] = useState('');
  const [numberOfPerson, setNumberOfPerson] = useState('');
  const [date, setDate] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const states = [name, phone, partyType, numberOfPerson, date];
  const images = [imgPlate1, imgPlate2, imgPlate3, imgPlate4];
  const regex = /^[^0-9+\-*.\/]*$/;
  const positions = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, left: 0 },
    { bottom: 0, right: 0 },
  ];

  const renderInputs = (typeOfInput, placeholder, text, state, setState) => {
    return (
      <Form.Floating className="mb-4">
        <Form.Control
          id="floatingInputCustom"
          type={typeOfInput}
          placeholder={placeholder}
          value={state}
          onChange={setState}
          className='inputs'
        />
        <label className='inputs-text' htmlFor="floatingInputCustom">{text}</label>
      </Form.Floating>
    )
  }

  const handleBookButton = () => {
    if (states.some(state => state.trim().length === 0) || !regex.test(name) || new Date(date) < new Date()) {
      setDisplayError(true);
    } else if (name.length < 4 || phone.length < 6 || partyType === 'Select party type') {
      setDisplayError(true);
    } else {
      setDisplayError(false);
    }
  };



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
                {
                  renderInputs(
                    'text',
                    'input your name',
                    'Name',
                    name,
                    (event) => setName(event.target.value))
                }
                {
                  renderInputs(
                    'text',
                    'input your phone',
                    'Phone',
                    phone,
                    (event) => setPhone(event.target.value))
                }
                <FloatingLabel className='mb-4' controlId="floatingSelect" label="Party Type">
                  <Form.Select
                    className='inputs'
                    onChange={(event) => setPartyType(event.target.value)}
                    aria-label="Floating label select example">
                    <option>Select party type</option>
                    <option value="Wedding party">Wedding party</option>
                    <option value="Christening party">Christening party</option>
                    <option value="Birthday party"> Birthday party</option>
                    <option value="Engagement party">Engagement party</option>
                    <option value="Graduation party">Graduation party</option>
                    <option value="Christmas party">Corporate party</option>
                  </Form.Select>
                </FloatingLabel>
                {
                  renderInputs(
                    'number',
                    'input your number',
                    'Person',
                    numberOfPerson,
                    (event) => setNumberOfPerson(event.target.value))
                }
                {
                  renderInputs('date',
                    'input date',
                    'Date',
                    date,
                    (event) => setDate(event.target.value))
                }
                <div
                  className='mb-3 text-danger'
                  style={{ display: displayError ? 'block' : 'none' }}>
                  Please ensure that all input fields are filled out correctly.
                </div>
                <Row>
                  <Button
                    className='inputs-button p-3 border-0'
                    size='lg'
                    variant="primary"
                    onClick={handleBookButton}
                    type='button'>
                    Book Now!
                  </Button>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

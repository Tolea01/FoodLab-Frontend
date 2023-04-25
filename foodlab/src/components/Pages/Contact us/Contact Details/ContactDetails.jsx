import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import foodImg from '../../../../assets/img/h-food.png';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineEnvironment } from 'react-icons/ai';
import RotatedImage from '../../../Template/RotatedImage';
import '../../../../assets/styles/contact-details.css';

export default function ContactDetails() {
  const contactDetailsCard = [
    {
      title: 'Phone',
      contact: '+1 817-901-3377, +1 817-901-3376',
      img: <AiOutlinePhone className='fs-2' />
    },
    {
      title: 'Email',
      contact: 'info@example.com',
      img: <AiOutlineMail className='fs-2' />
    },
    {
      title: 'Adress',
      contact: 'AT&T Software LLC, 4500 Mercantile plaza',
      img: <AiOutlineEnvironment className='fs-2' />
    },
  ]

  const renderInputs = (typeOfInput, placeholder, text) => {
    return (
      <Form.Floating className="mb-4">
        <Form.Control
          id="floatingInputCustom"
          type={typeOfInput}
          placeholder={placeholder}
          className='contact-details-inputs'
        />
        <label className='inputs-text' htmlFor="floatingInputCustom">{text}</label>
      </Form.Floating>
    )
  }

  return (
    <section className="contact-details">
      <Row className='w-100 m-0'>
        <Col sm={0} lg={3} className='contact-details-left-col d-sm-none d-lg-flex justify-content-center'>
          <div>
            <RotatedImage img={foodImg} />
          </div>
        </Col>
        <Col sm={12} lg={9} className='pt8 ps-2'>
          <Row>
            <Col sm={12} lg={4}>
              {
                contactDetailsCard.map((item, index) => {
                  return (
                    <Col className='contact-details-card d-flex bg-light p-2 mb-5' key={index}>
                      <div className="card-icon d-flex justify-content-center align-items-center">
                        {item.img}
                      </div>
                      <div className="card-text ms-3">
                        <h5>{item.title}</h5>
                        <h6>{item.contact}</h6>
                      </div>
                    </Col>
                  )
                })
              }
            </Col>
            <Col sm={12} lg={7} className='contact-details-form ms4 p-4'>
              <Row className='mb-3'>
                <h2>Send Message Us</h2>
              </Row>

              <Row>
                <Col>
                  {renderInputs('text', 'Name', 'Name')}
                </Col>
                <Col>
                  {renderInputs('text', 'Email', 'Email')}
                </Col>
              </Row>

              <Row>
                <Col>
                  {renderInputs('number', 'Phone', 'Phone')}
                </Col>
                <Col>
                  {renderInputs('text', 'Subject', 'Subject')}
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col>
                  <FloatingLabel controlId="floatingTextarea2" label='Message' className='container-textarea'>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      className='contact-details-textarea'
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button
                    className='inputs-button border-0 p-3'
                    size='lg'
                    variant="primary"
                    type='button'>
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row >
    </section >
  )
}
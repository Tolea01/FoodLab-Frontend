import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import leftLine from '../../../../assets/img/left-s.png';
import rightLine from '../../../../assets/img/right-s.png';
import hTag from '../../../../assets/img/h-tag.png';
import plateWithFood from '../../../../assets/img/plate with food 2.png';
import fruitImg from '../../../../assets/img/fruit.png';
import RotatedImage from '../../../Template/RotatedImage';
import serviceImg1 from '../../../../assets/img/se-1.png';
import serviceImg2 from '../../../../assets/img/se-2.png';
import serviceImg3 from '../../../../assets/img/se-3.png';
import serviceImg4 from '../../../../assets/img/se-4.png';
import serviceImg5 from '../../../../assets/img/se-5.png';
import serviceImg6 from '../../../../assets/img/se-6.png';
import service1Icon from '../../../../assets/img/handshake-1.png';
import service2Icon from '../../../../assets/img/dish-1.png';
import service3Icon from '../../../../assets/img/discount-voucher.png';
import service4Icon from '../../../../assets/img/ladies-night.png';
import service5Icon from '../../../../assets/img/balloon.png';
import service6Icon from '../../../../assets/img/dinning-table.png';
import '../../../../assets/styles/best-services.css';

export default function BestServices() {
  const services = [
    {
      img: serviceImg1,
      icon: service1Icon,
      text: 'Fast Delivery'
    },
    {
      img: serviceImg2,
      icon: service2Icon,
      text: 'Various Menu'
    },
    {
      img: serviceImg3,
      icon: service3Icon,
      text: 'Discount Voucher'
    },
    {
      img: serviceImg4,
      icon: service4Icon,
      text: 'Night Party'
    },
    {
      img: serviceImg5,
      icon: service5Icon,
      text: 'Charity Events'
    },
    {
      img: serviceImg6,
      icon: service6Icon,
      text: 'Private Dinning'
    },
  ];

  return (
    <section className='best-services position-relative'>
      <figure className='img-food'>
        <RotatedImage img={plateWithFood} width='200px' height='200px' position='absolute' right='80px' top='80px' />
      </figure>
      <figure className="img-fruit position-absolute">
        <Image src={fruitImg} fluid />
      </figure>
      <Container className='container-lg'>
        <div className='d-flex flex-column align-items-center mt-2 best-service-text-section'>
          <Row>
            <h2>Our Best Services</h2>
          </Row>
          <Row className='mb-2'>
            <p className='text-center best-services-text mt-2'>Lorem ipsum dolor sit amet consectetur adipiscing
              elit do eiusmod tempor incididunt ut labore.</p>
          </Row>
          <Row className='best-services-img'>
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
        <Row className='mb5'>
          {
            services.map((service, index) => {
              return (
                <Col key={index}>
                  <figure className='position-relative'>
                    <Link to='#'>
                      <Image className='position-relative best-service-img' src={service.img} />
                    </Link>
                    <div className="yellow-circle position-absolute d-flex flex-column justify-content-center align-items-center">
                      <Image className='best-service-icon' src={service.icon} fluid />
                      <h6 className='mt-2 text-center yellow-circle-text'>{service.text}</h6>
                    </div>
                  </figure>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section >
  )
}

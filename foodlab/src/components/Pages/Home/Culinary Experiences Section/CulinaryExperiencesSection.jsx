import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MainButton from '../../../Template/MainButton';
import Image from 'react-bootstrap/Image';
import chefImg from '../../../../assets/img/chef.png';
import foodImg from '../../../../assets/img/h-food.png';
import '../../../../assets/styles/culinary-experiences-section.css';

export default function CulinaryExperiencesSection() {
  return (
    <section className='cullinary-experience'>
      <Container className='container-lg position-relative' fluid>
        <Row className='w-100 mb-5'>
          <Col sm={12} md={6} className='left-col d-flex'>
            <div className='w-100 container-img1'>
              <Image src={chefImg} fluid />
            </div>
            <div className='w-50 container-img2'>
              <Image className='food-img' src={foodImg} fluid />
            </div>
          </Col>
          <Col sm={12} md={6} className='right-column'>
            <div className='w-100 d-flex flex-column right-column-text'>
              <h2>
                FoodLab is One Of The Best Food Service.
              </h2>
              <p className='mb-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className='d-flex align-content-start'>
              <MainButton contentText='Read More' padding='13px 20px' color='#0b0b0b' fontSize='16px' borderRadius='30px' />
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import chefImg from '../../../../assets/img/chef.png';
import foodImg from '../../../../assets/img/h-food.png';
import '../../../../assets/styles/culinary-experiences-section.css';

export default function CulinaryExperiencesSection() {
  return (
    <section className='cullinary-experience'>
      <Row className='w-100'>
        <Col className='left-col d-flex'>
          <div className='w-100 ttt'>
            <Image className='chef-img' src={chefImg} fluid />
          </div>
          <div className='w-50'>
            <Image className='food-img' src={foodImg} fluid />
          </div>
        </Col>
        <Col className='test'>
          <div className='w-100 d-flex flex-column right-column-text'>
            <h2 className='w-'>
              FoodLab is One Of The Best Food Service.
            </h2>
            <p className='w-50'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Col>
      </Row>
    </section >
  )
}

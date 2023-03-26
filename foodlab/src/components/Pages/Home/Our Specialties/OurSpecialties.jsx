import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainButton from '../../../Template/MainButton';
import Container from 'react-bootstrap/Container';
import RotatedImage from '../../../Template/RotatedImage';
import Image from 'react-bootstrap/Image';
import plateWithFood from '../../../../assets/img/plate with food.png';
import capoSteakImg from '../../../../assets/img/img 300x300(1).png';
import cauliflowerImg from '../../../../assets/img/img 300x300(2).png';
import italianoFoodImg from '../../../../assets/img/img 300x300(3).png';
import momoImg from '../../../../assets/img/img 300x300(4).png';
import '../../../../assets/styles/our-specialties.css';

export default function OurSpecialties() {
  const images = [capoSteakImg, cauliflowerImg, italianoFoodImg, momoImg]
  return (
    <section className='our-specialties'>
      <div className='rotate-img'>
        <RotatedImage img={plateWithFood} marginTop='-50%' marginLeft='30%' />
      </div>
      <Container className='container-lg' fluid>
        <Row>
          <Col className='mb-4' md={12}>
            <h2 className='text-center'>Try Our Special Recipes</h2>
          </Col>
        </Row>
        <Row>
          {
            images.map((img, index) => {
              let text = '';
              switch (index) {
                case 0:
                  text = 'Capo Steak';
                  break;
                case 1:
                  text = 'Cauliflower';
                  break;
                case 2:
                  text = 'Italian Food';
                  break;
                case 3:
                  text = 'Momo';
                  break;
                default:
                  break;
              }
              return (
                <Col sm={12} md={6} lg={3} className={`position-relative d-flex justify-content-center align-items-center our-specialties-img mt-5-sm ${index % 2 !== 0 ? 'mt-5' : ''}`} key={index}>
                  <Image className='d-flex justify-content-center' fluid src={img} />
                  <h6 className='position-absolute'>{text}</h6>
                </Col>
              )
            })
          }
        </Row >
        <Row>
          <Col className='d-flex mb-5 ms-3'>
            <MainButton contentText='View All' padding='13px 20px' color='#ffbe00' fontSize='16px' borderRadius='30px' background='#252525' />
          </Col>
        </Row>
      </Container >
    </section >
  )
}
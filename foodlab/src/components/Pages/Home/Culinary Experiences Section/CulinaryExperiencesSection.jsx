import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RotatedImage from '../../../Template/RotatedImage';
import MainButton from '../../../Template/MainButton';
import Image from 'react-bootstrap/Image';
import chefImg from '../../../../assets/img/chef.png';
import foodImg from '../../../../assets/img/h-food.png';
import chefCooking1 from '../../../../assets/img/chef-cooking.jpg';
import chefCooking2 from '../../../../assets/img/chef-cooking2.jpg';
import chefCooking3 from '../../../../assets/img/chef-cooking3.jpg';
import '../../../../assets/styles/culinary-experiences-section.css';

export default function CulinaryExperiencesSection() {
  const cullinaryExperiencesImg = [chefCooking1, chefCooking2, chefCooking3];

  return (
    <section className='cullinary-experience'>
      <Container className='container-lg position-relative' fluid>
        <Row className='w-100 cullinary-experience-row'>
          <Col sm={12} md={6} className='left-col d-flex'>
            <div className='w-100'>
              <Image src={chefImg} fluid />
            </div>
            <div className='w-50 img-rotate'>
              <RotatedImage width='80%' marginLeft='-38%' marginTop='97%' img={foodImg} fluid />
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
        <Row className='w-100 gallery'>
          <div className='cullinary-experience-galery'>
            <h2 className='mb-5'>
              We Know How to Make the Hygienic And Trusted Food in the city
            </h2>
          </div>

          {
            cullinaryExperiencesImg.map((elem, index) => {
              return (
                <Col sm={12} md={4} className='cullinary-experience-img' key={index}>
                  <Image className='w-100' src={elem} fluid />
                  <h4 className=' text-center mt-3'>20 Years of Experience</h4>
                </Col>
              )
            })
          }

        </Row>
      </Container>
    </section >
  )
}

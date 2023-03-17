import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
    <Carousel indicators={false} controls={false}>

      <Carousel.Item>
        <div className="w-100 slider-img img1" />
      </Carousel.Item>

      <Carousel.Item>
        <div className="w-100 slider-img img2" />
      </Carousel.Item>

      <Carousel.Item>
        <div className="w-100 slider-img img3" />
      </Carousel.Item>

    </Carousel>
  );
}
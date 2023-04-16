import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import '../../assets/styles/shopping-cart.css';

export default function ShoppingCart() {
  const [iconVisible, setIconVisible] = useState(true);

  const handleIconClick = () => {
    setIconVisible(!iconVisible);
  }

  return (
    <div className="shopping-cart d-flex align-items-center">
      <Container>
        <Row className='w-100'>
          <Col className='d-flex justify-content-start'>
            <div className='d-flex mt7'>
              {iconVisible ?
                <BsArrowUpCircle className='fs-3 me-3 color-yellow shopping-cart-icon mt-1' onClick={handleIconClick} /> :
                <BsArrowDownCircle className='fs-3 me-3 color-yellow shopping-cart-icon mt-1' onClick={handleIconClick} />
              }
              <div className="shopping-cart-orders">
                Your Orders
              </div>
            </div>
          </Col>

          <Col className='d-flex justify-content-end'>
            <div className="shopping-cart-price mt7">
              Total: <b>$12.00</b>
            </div>
            <div>
              <Button className='shopping-cart-button ms-3 px-4 d-none d-md-block' variant="warning">Buy</Button>
              <div className='d-block d-md-none h-100 ms-2'>
                <BsFillCartFill className='fs-3 color-yello' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
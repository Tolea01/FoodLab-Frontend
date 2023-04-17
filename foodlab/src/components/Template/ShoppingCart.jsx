import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsDashSquareFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import FoodImg from '../../assets/img/h-food.png';
import '../../assets/styles/shopping-cart.css';

export default function ShoppingCart() {
  const [iconVisible, setIconVisible] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setIconVisible(true);
  }

  const handleShow = () => {
    setShow(true);
    setIconVisible(false);
  }

  return (
    <div className="shopping-cart d-flex align-items-center" style={{ backgroundColor: show ? '#eae7e7' : '#ffffff' }}>
      <Container className='container-lg' fluid>
        <Row className='w-100'>
          <Col className='d-flex justify-content-start'>
            <div className='d-flex mt7'>
              {iconVisible ?
                <BsArrowUpCircle className='fs-3 me-3 color-yellow shopping-cart-icon mt-1' onClick={handleShow} /> :
                <BsArrowDownCircle className='fs-3 me-3 color-yellow shopping-cart-icon mt-1' onClick={handleClose} />
              }
              <div className="shopping-cart-orders shopping-cart-text-color">
                Your Order
              </div>
            </div>
          </Col>

          <Col className='d-flex justify-content-end p-0'>
            <div className="shopping-cart-price mt7">
              Total: <b>$12.00</b>
            </div>
            <div>
              <Button className='shopping-cart-button ms-3 px-4 d-none d-md-block' variant="warning">Buy</Button>
              <div className='d-block d-md-none h-100 ms-2'>
                <BsFillCartFill className='fs-3 color-yellow' />
              </div>
            </div>
          </Col>

          <Offcanvas className='shopping-cart-products px8' show={show} onHide={handleClose} backdrop={false} placement='bottom'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='shopping-cart-text-color'>
                Order Details
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <Row className='w-100 d-flex align-items-center mb-5'>
                <Col>
                  <Image className='shoping-cart-img' src={FoodImg} />
                </Col>
                <Col>
                  <h6 className='shopping-cart-text-color'>food</h6>
                </Col>
                <Col>
                  <h6 className='shopping-cart-text-color'>$12.00</h6>
                </Col>
                <Col>
                  <h6 className='shopping-cart-text-color'>Quantity(1)</h6>
                </Col>
                <Col className='d-flex justify-content-end'>
                  <BsDashSquareFill className='fs-4 me-2 cart-icon' />
                  <BsFillPlusSquareFill className='fs-4 me-2 cart-icon' />
                  <BsTrash className='fs-4 cart-icon' />
                </Col>
              </Row>

            </Offcanvas.Body>
          </Offcanvas>

        </Row>
      </Container>
    </div >
  )
}
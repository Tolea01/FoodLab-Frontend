import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiSearch } from "react-icons/bi";
import ProductCard from '../../Template/ProductCard';
import PageHeader from '../../Template/PageHeader';
import '../../../assets/styles/menu.css';

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Pizza');
  const [activeCategory, setActiveCategory] = useState(null);

  const sendGetRequest = (link) => {
    axios
      .get(link)
      .then(productsData => setProducts(productsData.data))
      .catch(error => console.log(error));
  }

  const categoryClick = (categoryName) => {
    setCategory(categoryName);
    setActiveCategory(categoryName);
  }

  const categoryList = (categoryName) => {
    return (
      <li
        className={activeCategory === categoryName ? 'active-category' : ''}
        onClick={() => categoryClick(categoryName)}>{categoryName}
      </li>
    )
  }

  useEffect(() => {
    sendGetRequest(`http://localhost:3001/${category}`);
  }, [category])

  return (
    <>
      <PageHeader textContent='Menu' />
      <Container>
        <Row className='culinary-section w-100 mt6'>
          <Col className='mb-4' sm={12} md={3}>
            <ul className='text-center'>
              {categoryList('Pizza')}
              {categoryList('Burger')}
              {categoryList('Meat')}
              {categoryList('Salad')}
              {categoryList('Soup')}
              {categoryList('Beverage')}
            </ul>
          </Col>
          <Col sm={12} md={9}>
            <Row>
              <Form className="d-flex w-100">
                <Form.Control
                  type="text"
                  placeholder={`Search ${category}`}
                  className='culinary-section-search'
                  aria-label="Search"
                />
                <Button className='culinary-section-search-button'>
                  <BiSearch className='fs-6' />
                </Button>
              </Form>
            </Row>
            <Row className='mt-5 ms-sm-0 ms-lg-2'>
              {
                products.map((product, index) => {
                  return (
                    <Col className='mb-4 culinary-section-product ' key={index}>
                      <ProductCard
                        cardTitle={product.productName}
                        cardDescription={product.productDescription}
                        productImage={product.productImage}
                        price={product.initialPrice}
                      />
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container >
    </>
  )
}
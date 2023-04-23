import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useShoppingCart } from '../../../hooks/useShoppingCart';
import ShoppingCart from '../../Template/ShoppingCart';
import PageHeader from '../../Template/PageHeader';
import ProductCard from '../../Template/ProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import searchIcon from '../../../assets/img/searchIcon.png';

export default function Search() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const searchValue = decodeURIComponent(location.search.replace('?', '')).replace('%', '');
  const { productsInCart, setProductsInCart, addProductToCart } = useShoppingCart();

  useEffect(() => {
    axios
      .get('http://localhost:3002/allProducts')
      .then(productsData => setProducts(productsData.data))
  }, []);

  const filteredProducts = products.filter((product) => {
    return (product.productName.toLowerCase().includes(searchValue.toLowerCase()))
  });

  return (
    <>
      <PageHeader textContent='Search' />
      <section className='search-page' style={{ marginTop: '6%' }}>
        <Container>
          <Row>
            {
              filteredProducts.length === 0 ?
                <div className='d-flex flex-column align-items-center' style={{ paddingBottom: '8%' }}>
                  <Image style={{ width: '195px', height: '190px' }} src={searchIcon} />
                  <h4 className='mt-4' style={{ color: '#5d5a77' }}>Sorry! No result found</h4>
                </div> :

                filteredProducts.map((product, index) => {
                  return (
                    <Col sm={12} md={3} className='mb-4 d-flex justify-content-center justify-content-md-start' key={index}>
                      <ProductCard
                        cardTitle={product.productName}
                        cardDescription={product.productDescription}
                        productImage={product.productImage}
                        price={product.initialPrice + '$'}
                        addProduct={() => addProductToCart(product)}
                      />
                    </Col>
                  )
                })
            }
          </Row>
        </Container>
        <ShoppingCart products={productsInCart} setProducts={setProductsInCart} />
      </section>
    </>
  )
}

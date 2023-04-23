import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ShoppingCartButton(props) {
  return (
    <Button
      className='text-white ms-3 px-4 d-none d-md-block'
      variant='warning'
      onClick={props.handleClick}
    >
      Buy
    </Button>
  )
}

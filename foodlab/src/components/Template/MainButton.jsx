import React from 'react';
import Button from 'react-bootstrap/Button';

export default function MainButton(props) {
  return (
    <Button variant='warning'>
      props.name
    </Button>
  )
}
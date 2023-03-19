import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import '../../assets/styles/main-button.css';

export default function MainButton(props) {
  const styles = {
    button: {
      padding: props.padding,
      color: props.color,
      fontSize: props.fontSize,
      borderRadius: props.borderRadius,
    }
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <Link to={props.href}>
        <Button className='explore-button position-relative' variant='warning' style={styles.button}>
          {props.contentText}
          <FaArrowRight className='ms-2' />
        </Button>
      </Link>
    </div>
  )
}
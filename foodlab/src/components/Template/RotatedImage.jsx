import React from 'react';
import Image from 'react-bootstrap/Image';
import '../../assets/styles/rotated-image.css';

export default function RotatedImage(props) {
  const styles = {
    img: {
      width: props.width,
      height: props.height,
      position: props.position,
      marginLeft: props.marginLeft,
      marginRight: props.marginRight,
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
      top: props.top,
      left: props.left,
      right: props.right,
      bottom: props.botom,
    }
  }
  return (
    <Image fluid className='rotated-img' src={props.img} style={styles.img} />
  )
}

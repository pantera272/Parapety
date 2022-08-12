import { Carousel } from 'react-bootstrap';
import React from 'react';
import styles from './Baner.module.scss';

const Baner = () => {

  const images = ['baner1.jpg', 'baner2.jpg', 'baner3.jpg', 'baner4.jpg', 'baner5.jpg'];

  return (
    <div className={styles.container}>
      <Carousel variant='dark' interval={1000} fade={true} indicators={false} controls={false}>
        {images.map(image => 
        <Carousel.Item key={image}>
          <img
            className='d-block w-100'
            src={'/img/baner/'+ image}
            alt={image}
          />
        </Carousel.Item>
        )}
      </Carousel>
    </div>
  )
}

export default Baner;
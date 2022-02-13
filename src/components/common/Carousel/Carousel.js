import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

/* IMPORTED PHOTO CAROUSEL*/
const Carousel = ({images, mode}) => (
  <div className={styles.[`carouselContainer-${mode}`]}>
    <AliceCarousel autoPlay autoPlayInterval='3000' animationType='fadeout' disableButtonsControls='true' disableDotsControls='true' infinite='true'>
      {images.map(image => (
        <img  key={image} alt={image} className={styles.itemImage} src={`/images/${image}`} />
      ))}
    </AliceCarousel>
  </div>
);

Carousel.propTypes = {
  images: PropTypes.array,
  mode: PropTypes.string,
};

export default Carousel;

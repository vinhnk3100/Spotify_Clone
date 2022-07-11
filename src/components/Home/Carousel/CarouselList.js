import React from 'react';
import { Carousel } from 'antd';
import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem';

export default function CarouselList(props) {
  const { topHitAlbums } = props;
  console.log(topHitAlbums);

  return (
    <div
      className={`${styles.home_carousel_container} home_carousel_container`}
    >
      <Carousel autoplay={true} dotPosition={'left'}>
        {topHitAlbums.map((hitAlbum, index) => (
          <div key={index} className={`${styles.carousel_item_container}`}>
            <CarouselItem hitAlbum={hitAlbum} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

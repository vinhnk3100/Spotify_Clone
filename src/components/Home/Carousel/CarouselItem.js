import React from 'react';
import styles from './Carousel.module.scss';

export default function CarouselItem({ hitAlbum }) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, 
        rgb(20,20,20), 
        ${hitAlbum.primaryColor},
        rgb(50,50,50))`,
      }}
      className={`card ${styles.carousel_item}`}
    >
      <div className='row g-0'>
        <div className='col-md-3 d-flex justify-content-center align-items-center'>
          <img src={hitAlbum.image} className='img-fluid' alt='example img' />
        </div>
        <div className='col-md-9 d-flex align-items-center'>
          <div className='card-body'>
            <h5 className={`${styles.subtitle}`}>Album From your Library</h5>
            <h1 className={`${styles.title}`}>{hitAlbum.label}</h1>
            <p className={`${styles.content}`}>
              By: <i>{hitAlbum.artist}</i>
            </p>
            <p className={`${styles.footer_content} d-flex`}>
              2018: "number":song, "number"mins
              <a className='ps-3 text-white text-decoration-underline' href='/'>
                View full album
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable array-callback-return */
import React from 'react';
import AlbumItem from './AlbumItem';
import styles from './Albums.module.scss';

export default function AlbumList(props) {
  const { category, albums } = props;

  return (
    <>
      {category.map((categories, index) => {
        let countAlbum = 0;
        return (
          <section
            key={index}
            className={`${styles.category_section_container}`}
          >
            <span className={`${styles.categories_title}`}>
              {categories.label}
            </span>
            <p className={`text-white fs-5 p-0 m-0`}>{categories.subtitle}</p>
            <div className={`d-flex flex-row`}>
              {albums.map((album, index) => {
                if (album.category === categories.key) {
                  countAlbum += 1;
                  if (countAlbum <= 5) {
                    return (
                      <AlbumItem key={index} album={album} style={styles} />
                    );
                  }
                }
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}

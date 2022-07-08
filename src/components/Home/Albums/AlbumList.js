/* eslint-disable array-callback-return */
import React from 'react';
import { Tooltip } from 'antd';
import AlbumItem from './AlbumItem';

export default function AlbumList(props) {
  const { category, albums, styles } = props;
  console.log(albums);

  return (
    <>
      {category.map((categories, index) => (
        <section key={index} className={`${styles.category_section_container}`}>
          <Tooltip title='See all' placement={'right'}>
            <span className={`${styles.categories_title}`}>
              {categories.label}
            </span>
          </Tooltip>
          <p className={`text-white fs-5 p-0 m-0`}>{categories.subtitle}</p>
          <div className={`d-flex flex-row`}>
            {albums.map((album, index) => {
              if (album.category === categories.key)
                return <AlbumItem key={index} album={album} style={styles} />;
            })}
          </div>
        </section>
      ))}
    </>
  );
}

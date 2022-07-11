import React from 'react';
import styles from './_HomeLayout.module.scss';
import { category, albums, topHitAlbums } from '../../../utils/constants';
import { Albums, Carousels } from '../../../components/Home/index';

export default function HomeLayout() {
  return (
    <div className={`${styles.home_layout_container}`}>
      {/* Carousels section */}
      <Carousels {...{ topHitAlbums }} />

      {/* Albums Section */}
      <Albums {...{ category, albums }} />
    </div>
  );
}

import React from 'react';
import { Carousel, Tooltip } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import PredatorImg from '../../public/images/Predator.jpg';
import styles from './_HomeLayout.module.scss';
import { category, albums } from '../../utils/constants';
import { Albums } from '../../components/Home/index';

export default function HomeLayout() {
  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className={`${styles.home_layout_container}`}>
      <div
        className={`${styles.home_carousel_container} home_carousel_container`}
      >
        <Carousel dotPosition={'left'}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>

      {/* These sections will show all the category */}

      {/* Spotify Recommended - Categories 1 */}

      {/* Focus - Categories 2 */}
      <Albums {...{ styles, category, albums }} />
    </div>
  );
}

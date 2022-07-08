import React from 'react';
import { Tooltip } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import PredatorImg from '../../../public/images/Predator.jpg';

export default function AlbumItem(props) {
  const { album, style } = props;

  return (
    <>
      <div
        className={`${style.card_container} ${style.card_overlay} categories_${album.category} card bg-dark m-3`}
      >
        <div className={`${style.card_items} `}>
          <img src={PredatorImg} className={`img-fluid`} alt='...' />
          <div className={`card-img-overlay`}>
            <div
              className={`${
                album.subtitle.length > 0
                  ? style.card_text_container
                  : style.card_text_container_without_content
              } d-flex flex-column`}
            >
              <h5 className={`${style.card_title}`}>{album.label}</h5>
              <p className={`${style.card_content} card-text`}>
                {album.subtitle}
              </p>
            </div>
            <div className={`${style.card_icon_container}`}>
              <span className={`${style.card_play_icon}`}>
                <CaretRightOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

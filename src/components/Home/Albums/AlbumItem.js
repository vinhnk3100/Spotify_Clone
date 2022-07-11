import React from 'react';
import { Tooltip, Card } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import PredatorImg from '../../../public/images/Predator.jpg';

const { Meta } = Card;
export default function AlbumItem(props) {
  const { album, style } = props;
  return (
    <>
      <Tooltip
        title={album.label}
        placement={'bottom'}
        color={album.backGroundColor}
      >
        <div
          className={`${style.card_container} ${style.card_overlay} categories_${album.category} card bg-dark m-3`}
        >
          <div className={`${style.card_items} `}>
            <img src={album.image} className={`img-fluid`} alt='albumImg' />
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
      </Tooltip>
    </>
  );
}

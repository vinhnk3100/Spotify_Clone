import React from 'react';
import { Tabs } from 'antd';
import styles from './Tabs.module.scss';
import TabContent from './TabContent';

const { TabPane } = Tabs;

export default function TabsList({ category, albums }) {
  const onChange = key => {
    console.log(key);
  };
  return (
    <Tabs
      defaultActiveKey='0'
      size={'large'}
      destroyInactiveTabPane={true}
      animated={true}
      onChange={onChange}
      className={`${styles.tabs_container}`}
    >
      {category.map((categories, index) => (
        <TabPane
          key={`${index}`}
          tab={categories.label}
          className={'text-white'}
        >
          {albums.map((album, index) => {
            if (album.category === categories.key) {
              return <TabContent album={album} key={index} />;
            }
          })}
        </TabPane>
      ))}
    </Tabs>
  );
}

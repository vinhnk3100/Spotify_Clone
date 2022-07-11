import * as React from 'react';
import styles from './Browse.module.scss';
import { Divider, Typography, Tabs } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const { TabPane } = Tabs;

export default function BrowseLayout() {
  const onChange = key => {
    console.log(key);
  };
  console.log('Work');
  return (
    <div className={`${styles.browse_layout_container}`}>
      <h1 className={`${styles.layout_title}`}>Browse</h1>
      <Tabs
        defaultActiveKey='1'
        size={'large'}
        destroyInactiveTabPane={true}
        animated={true}
        onChange={onChange}
        className={`${styles.tabs_container}`}
      >
        <TabPane tab='Tab 1' key='1' className={'text-white'}>
          Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content
          of Tab Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab
          Pane 1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1Content of Tab Pane 1Content of Tab Pane
          1Content of Tab Pane 1
        </TabPane>
        <TabPane tab='Tab 2' key='2' className={'text-white'}>
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab='Tab 3' key='3' className={'text-white'}>
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

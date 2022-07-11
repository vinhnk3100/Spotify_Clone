import * as React from 'react';
import styles from './Browse.module.scss';
import { Tabs } from '../../../components/Browse/index';
import { category, albums } from '../../../utils/constants';

export default function BrowseLayout() {
  console.log('Work');
  return (
    <div className={`${styles.browse_layout_container}`}>
      <h1 className={`${styles.layout_title}`}>Browse</h1>
      <Tabs {...{ category, albums }} />
    </div>
  );
}

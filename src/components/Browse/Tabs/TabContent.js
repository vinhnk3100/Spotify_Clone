import React from 'react';
import CardList from './Cards/CardList';
import styles from './Tabs.module.scss';

export default function TabContent({ album }) {
  return (
    <div>
      <CardList album={album} />
    </div>
  );
}

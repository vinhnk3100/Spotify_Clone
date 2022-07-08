import React from 'react';
import { Layout, Input } from 'antd';
import styles from './_HeaderLayout.module.scss';
const { Header } = Layout;
const { Search } = Input;

export default function HeaderLayout() {
  const onSearch = value => console.log(value);
  return (
    <Header
      className={`d-flex align-items-center pl-5 ${styles.ant_header_layout}`}
    >
      <Search
        className={`${styles.header__search_input}`}
        placeholder='input search text'
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </Header>
  );
}

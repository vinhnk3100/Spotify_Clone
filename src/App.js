import React from 'react';
import Router from './routers/index';
import { Layout } from 'antd';
import { SiderLayout, HeaderLayout } from './layouts/index';
const { Content } = Layout;

const App = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <SiderLayout />
      <Layout>
        <HeaderLayout />
        <Content>
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

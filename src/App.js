import './App.css';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import React from 'react';

import Dashboard from './screens/dashboard/dashboard.js'
import Sidebar from './screens/dashboard/sidebar.js'
const { Header, Footer, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <h2>Edge Dashboard</h2>
        <div className="searchTop">
          <input type="text" />
        </div><SearchOutlined />

        <Button shape="circle" icon={<UserOutlined />} />

      </Header>

      <Sider width={200} className="site-layout-background1">
        <Sidebar></Sidebar>
      </Sider>
      <Content>
        <Dashboard />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;

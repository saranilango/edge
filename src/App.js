import './App.css';
import { Layout, Select, Button } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

import { useState, useEffect } from 'react';
import Dashboard from './screens/dashboard/dashboard.js'
import Sidebar from './screens/dashboard/sidebar.js'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import Filter from './screens/dashboard/Filter.js'
const { Header, Footer, Content, Sider } = Layout;
const { Option } = Select;

function App() {
  const [isCollapse, isCollapseHandler] = useState(false);
  const onhandler = () => {
    isCollapseHandler(!isCollapse);
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const CustomTrigger = () => {
    return (
      <>
        <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
      </>
    )
  }
  return (

    <Layout>
      <Header>
        <h2>Edge Dashboard</h2>
        <div className="topnav-right">
          <Select
            defaultValue="Global View"
            style={{
              width: '100%',
            }}
            onChange={handleChange}
          >
            <Option value="Default">Global View</Option>
            <Option value="Global">Global</Option>
          </Select>
          {/* <Button shape="circle" icon={<UserOutlined />} /> */}
        </div>
      </Header>
      <Filter></Filter>
      <Layout>
        <Content>
          <Dashboard />
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  );
}

export default App;

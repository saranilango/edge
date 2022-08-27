import './App.css';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import React from 'react';

import { useState, useEffect } from 'react';
import Dashboard from './screens/dashboard/dashboard.js'
import Sidebar from './screens/dashboard/sidebar.js'
import { MenuUnfoldOutlined } from '@ant-design/icons';
const { Header, Footer, Content, Sider } = Layout;


function App() {
  const [isCollapse, isCollapseHandler] = useState(false);
  const onhandler =()=>{
    isCollapseHandler(!isCollapse);
  }

  const CustomTrigger=()=>{
    return(
      <>
      <MenuUnfoldOutlined style={{fontSize:"20px"}} />
      </>
    )
  }
  return (
    <Layout>
      <Sider width={200} className="site-layout-background1"
      // breakpoint="lg"
      collapsible={true}
       style={{
        overflow: 'auto',
        height: '100vh',
        left: 0,
        top: 0,
        bottom: 0,
      }}
      trigger={<CustomTrigger />}
      onCollapse={onhandler}>
      {(isCollapse==false)? <Sidebar></Sidebar> : ""}
      </Sider>
      <Layout>
        <Header>
          <h2>Edge Dashboard</h2>
          <div className="searchTop">
            <input type="text" />
          </div><SearchOutlined />
          <Button shape="circle" icon={<UserOutlined />} />
        </Header>
        <Content>
          <Dashboard />
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default App;

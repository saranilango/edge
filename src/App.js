import './App.css';
import { Layout, Select, Button, Space, Modal  } from 'antd';
import React, { useState, useEffect } from 'react';
import { MenuUnfoldOutlined, CaretDownFilled, CaretUpFilled } from '@ant-design/icons';
import Filter from './screens/dashboard/filter.js'
import DemoRadialGraph from './components/graph/radialGraph';
const { Header, Footer, Content } = Layout;

function App() {
  const [graphDirection, setGraphDirection] = useState(null);
  const [layoutGraphDirection, setlayoutGraphDirection] = useState(null);
  const [showTab, setshowTab] = useState(true);

  useEffect(() => {
    console.log('graphDirection:', graphDirection);
  });

  const onsubmitFilter = (filterData) => {
    console.log("values ", filterData);
    setGraphDirection(filterData);
    setlayoutGraphDirection(filterData);
  }
  const CustomTrigger = () => {
    return (
      <>
        <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
      </>
    )
  }
  const showfilter = () => {
    console.log("setshowTab:", showTab);
    setshowTab(!showTab);
  };
  return (
    <>
    <Layout>
      <Header>
        <Space wrap>
          <div> <h2>EDGE <label>Dashboard</label></h2></div>
          <div>
            <Button type="primary" onClick={showfilter}>
              Control Panel
              {!showTab ? <CaretUpFilled /> : <CaretDownFilled />}
            </Button>
          </div>
        </Space>
      </Header>
      {!showTab ? <Filter data={{ "direction": graphDirection }} onsubmit={onsubmitFilter}></Filter> : ""}
      <Layout>
        <Content>
          <DemoRadialGraph data={{ "graphDirection": graphDirection, "layoutGraphDirection": layoutGraphDirection }} />
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
    </>
  );
}

export default App;

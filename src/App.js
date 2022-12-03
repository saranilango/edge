import './App.css';
import { Layout, Select, Button, Space, Input, Col, Row, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import { MenuUnfoldOutlined, CaretDownFilled, CaretUpFilled, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Filter from './screens/dashboard/filter.js'
import DemoRadialGraph from './components/graph/radialGraph';
import CounterInput from "react-counter-input";
const { Header, Footer, Content } = Layout;

function App() {
  const [graphDirection, setGraphDirection] = useState(null);
  const [layoutGraphDirection, setlayoutGraphDirection] = useState(null);
  const [showTab, setshowTab] = useState(true);
  const [count, setCount] = useState(1);


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
  const onChangeCounter = (value) => {
    console.log('changed', value);
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

        <div className='bottom-card'>
          <Row>
            <Col span={12}><Input placeholder="Data Product" disabled /></Col>
            <Col span={12}>
              <CounterInput min={0} max={10}  onCountChange={onChangeCounter} />
            </Col>
          </Row>
        </div>
        <Footer></Footer>
      </Layout>
    </>
  );
}

export default App;

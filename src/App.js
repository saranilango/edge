import './App.css';

import { Layout } from 'antd';
import React from 'react';

import Dashboard from './screens/dashboard/dashboard.js'
const { Header, Footer, Content } = Layout;

function App() {

  return (
    <div>
      <Layout>
        <Header>
          <h2>Edge Dashboard</h2>
          <div className="searchTop">
            <input type="text"></input>
          </div>
        </Header>
        <Content>
          <Dashboard />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;

import './App.css';

import { Layout } from 'antd';
import React from 'react';
import DecompositionTreeGraph from './graph/multiRelationgraph.js'
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header>
          <h2>Edge Dashboard</h2>
        </Header>
        <Content >
          <div>
            <DecompositionTreeGraph />
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;

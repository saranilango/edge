import './App.css';
import { Layout, Select } from 'antd';
import SvgLogo from "./loader.svg";
import React, { useState, useEffect } from 'react';
import Dashboard from './screens/dashboard/dashboard.js'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import Filter from './screens/dashboard/Filter.js'
import RadialTreeGraphs from './components/graph/RadialTreeGraph';
const { Header, Footer, Content } = Layout;
const { Option } = Select;

function App() {
  const [isCollapse, isCollapseHandler] = useState(false);
  const [graphdata, setgraphdata] = useState(null);
  const [domainOptions, setdomainOptions] = useState(null);
  const [subdomainOptions, setsubdomainOptions] = useState(null);
  const [totalsubdomainOptions, settotalsubdomainOptions] = useState(null);
  const [dependencyData, setdependencyData] = useState(null);
  const [dropdownstate, setdropdownstate] = useState("default");
  const [carouseldata, setcarouseldata] = useState([]);
  const [graphDirection, setGraphDirection] = useState(null);


  const onhandler = () => {
    isCollapseHandler(!isCollapse);
  }

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    // setdropdownstate(value);
    // if(value==="carouselview"){
    //   fetch('http://tst.kumaran.com/dps/down_view/')
    //   .then(data => data.json())
    //   .then(datas => {
    //     setcarouseldata(datas.data);
    //   })
    // }
  };
  useEffect(() => {
    //console.log("worked");
    //   fetch('http://tst.kumaran.com/dps/list/')
    //     .then(data => data.json())
    //     .then(datas => {
    //       setgraphdata(datas);
    //       let subdomain = [];
    //       let tempsubdomain = [];
    //       datas.nodes?.forEach(data => {
    //         if (!tempsubdomain.includes(data.value.items[2].value.toString())) {
    //           tempsubdomain.push(data.value.items[2].value.toString());
    //           subdomain.push({ value: data["sub-domain-id"].toString(), label: data.value.items[2].value.toString() });
    //         }
    //       });
    //       setdomainOptions(Object.keys(datas.domains));
    //       let totalSubdomain = [];
    //       Object.keys(datas.domains).forEach(Element => {
    //         if (datas.domains[Element].length > 0) {
    //           datas.domains[Element].forEach(element => {
    //             totalSubdomain.push({ value: element[0], label: element[1] })
    //           })
    //         }
    //       })
    //       settotalsubdomainOptions(totalSubdomain);
    //       setdependencyData(datas.domains);
    //       subdomain.sort();
    //       setsubdomainOptions(subdomain)
    //     })
    console.log('graphDirection:', graphDirection);
  }, []);

  const onsubmitFilter = (filterData) => {
    console.log("values ", filterData);
    setGraphDirection(filterData);
    // let subdomainstring = "";
    // cursubdomain.forEach(ele => {
    //   subdomainstring += `sub-domain=${ele}&`;
    // })
    // fetch(`http://tst.kumaran.com/dps/list/?${subdomainstring.substring(0, subdomainstring.length - 1)}`)
    //   .then(data => data.json())
    //   .then(datas => {
    //     // console.log(datas);
    //     setgraphdata(datas);
    //   })
  }
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
        <h2>EDGE <label>Dashboard</label></h2>
        {/* <div className="topnav-right">
          <Select
            defaultValue="default"
            style={{
              width: '100%',
            }}
            onChange={handleChange}
          >
            <Option value="default">Data Product</Option>
            <Option value="carouselview">Data Product in Error</Option>
            <Option value="Global">Global</Option>
          </Select>
        </div> */}
      </Header>
      {/* {graphdata && domainOptions && subdomainOptions ?
        <>
          <Filter data={{ "domain": domainOptions, "subdomain": subdomainOptions, "totalSubdomain": totalsubdomainOptions, dependencyData: dependencyData }} onsubmit={onsubmitFilter} dependencyData={dependencyData}></Filter>
          <Layout>
            <Content>
              <Dashboard data={graphdata} carouseldata={carouseldata} dropdownstate={dropdownstate} />
              <RadialTreeGraphs />
            </Content>
          </Layout></> : <div className='loading'><img src={SvgLogo} className="App-logo" alt="logo" /></div>} */}
          <Filter  data={{"direction": graphDirection}} onsubmit={onsubmitFilter}></Filter>
          <Layout>
            <Content>
              <RadialTreeGraphs data={{"graphDirection": graphDirection}}/>
            </Content>
          </Layout>
      <Footer></Footer>
    </Layout>
  );
}

export default App;

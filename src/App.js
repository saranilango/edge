import './App.css';
import { Layout, Select } from 'antd';
import SvgLogo from "./loader.svg";
import React,{ useState, useEffect } from 'react';
import Dashboard from './screens/dashboard/dashboard.js'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import Filter from './screens/dashboard/Filter.js'
const { Header, Footer, Content } = Layout;
const { Option } = Select;

function App() {
  const [isCollapse, isCollapseHandler] = useState(false);
  const [graphdata, setgraphdata] = useState(null);
  const [domainOptions, setdomainOptions] = useState(null);
  const [subdomainOptions, setsubdomainOptions] = useState(null);
  const [dependencyData,setdependencyData] = useState(null);
  const onhandler = () => {
    isCollapseHandler(!isCollapse);
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
let dependencyDatas=[];
  useEffect(() => {
    //console.log("worked");
    fetch('http://localhost:8000/dps/list/')
        .then(data => data.json())
        .then(datas => {
            setgraphdata(datas);
            let subdomain = [];
            let tempsubdomain=[];
            datas.nodes?.forEach(data => {
                
                if (!tempsubdomain.includes(data.value.items[2].value.toString())) {
                    tempsubdomain.push(data.value.items[2].value.toString());
                    subdomain.push({value:data["sub-domain-id"],label:data.value.items[2].value.toString()});
                }
            });
            setdomainOptions(Object.keys(datas.domains));
            setdependencyData(datas.domains);
            subdomain.sort();
            setsubdomainOptions(subdomain)
        })

}, []);

 const onsubmitFilter=(cursubdomain)=>{
 // console.log(curdomain,cursubdomain);
 
  let subdomainstring="";
  cursubdomain.forEach(ele=>{
    subdomainstring+=`sub-domain=${ele}&`;
  })
  fetch(`http://localhost:8000/dps/list/?${subdomainstring.substring(0,subdomainstring.length-1)}`)
  .then(data => data.json())
  .then(datas => {
    console.log(datas);
      setgraphdata(datas);
  })
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
        <h2>Edge Dashboard</h2>
        <div className="topnav-right">
          <Select
            defaultValue="Data Product"
            style={{
              width: '100%',
            }}
            onChange={handleChange}
          >
            <Option value="Default">Data Produt</Option>
            {/* <Option value="Global">Global</Option> */}
          </Select>
          {/* <Button shape="circle" icon={<UserOutlined />} /> */}
        </div>
      </Header> {graphdata&&domainOptions&&subdomainOptions?
      <>
      <Filter data={{"domain":domainOptions,"subdomain":subdomainOptions}} onsubmit={onsubmitFilter} dependencyData={dependencyData}></Filter>
     <Layout>
        <Content>
        <Dashboard data={graphdata} />
        </Content>
      </Layout></>:<div className='loading'><img src={SvgLogo} className="App-logo" alt="logo" /></div>}
      
      <Footer></Footer>
    </Layout>
  );
}

export default App;

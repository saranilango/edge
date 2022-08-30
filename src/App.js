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

  const onhandler = () => {
    isCollapseHandler(!isCollapse);
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    //console.log("worked");
    fetch('http://localhost:8000/dps/list/')
        .then(data => data.json())
        .then(datas => {
            setgraphdata(datas);
            let domain = [];
            let subdomain = [];
            let tempdomain=[];
            let tempsubdomain=[];
            datas.nodes?.forEach(data => {
                if (!tempdomain.includes(data.value.items[1].value.toString())) {
                  tempdomain.push(data.value.items[1].value.toString());
                    domain.push({value:data["domain-id"],label:data.value.items[1].value.toString()});
                }
                if (!tempsubdomain.includes(data.value.items[2].value.toString())) {
                    tempsubdomain.push(data.value.items[2].value.toString());
                    subdomain.push({value:data["sub-domain-id"],label:data.value.items[2].value.toString()});
                }
            });
            domain.sort();
            subdomain.sort();
            setdomainOptions(domain);
            setsubdomainOptions(subdomain)
        })

}, []);
const ondomainChange=(curdomain)=>{
  
  setdomainOptions(curdomain);
}
const onsubdomainChange=(cursubdomain)=>{
  setsubdomainOptions(cursubdomain);
}
 const onsubmitFilter=(curdomain,cursubdomain)=>{
  console.log(curdomain,cursubdomain);
  let domainstring="";
  curdomain.forEach(ele=>{
   domainstring+=`domain=${ele}&`;
  })
  let subdomainstring="";
  cursubdomain.forEach(ele=>{
    subdomainstring+=`subdomain=${ele}&`;
  })
  fetch(`http://localhost:8000/dps/list/?${domainstring}${subdomainstring}`)
  .then(data => data.json())
  .then(datas => {
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
      <Filter data={{"domain":domainOptions,"subdomain":subdomainOptions}} onsubmit={onsubmitFilter} ondomainChange={ondomainChange} onsubdomainChange={onsubdomainChange}></Filter>
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

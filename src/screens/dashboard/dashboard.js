
import { Card } from 'antd';
import { useState, useEffect } from 'react';
import DecompositionTreeGraph from '../../components/graph/multiRelationGraph';
// import OrganizationGraphs from '../../components/graph/organizationGraph.js';
// import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import SvgLogo from "../../loader.svg";
function Dashboard() {
    const [isfilter, setisfilter] = useState(true);
    const [isdomain, setisdomain] = useState(true);
    const [issubdomain, setissubdomain] = useState(true);
    const [graphdata, setgraphdata] = useState(null);
    const [domainOptions, setdomainOptions] = useState([]);
    const [subdomainOptions, setsubdomainOptions] = useState([]);
    const onChangedomain = (e) => {
        setisdomain(!isdomain);
        console.log(e);
    };

    const onChangesubdomain = (e) => {
        setissubdomain(!issubdomain);
        console.log(`checked = ${e}`);
    };

    useEffect(() => {
        console.log("Use Effect Called");
        fetch('https://25685736-c4d7-417f-908b-ec718f54f275.mock.pstmn.io/v1/getgraphdata')
            .then(data => data.json())
            .then(datas => {
                setgraphdata(datas.graphdata);
                let domain = [];
                let subdomain = [];
                datas.graphdata.nodes?.forEach(data => {
                    if(!domain.includes(data.value.items[1].value.toString())){
                        domain.push(data.value.items[1].value.toString());
                    }
                    if(!subdomain.includes(data.value.items[2].value.toString())){
                    subdomain.push( data.value.items[2].value.toString());
                    }
                });
                setdomainOptions( domain);
                setsubdomainOptions( subdomain)
            })

    }, []);



    return (
        <>
            {graphdata&&domainOptions.length>0&&subdomainOptions.length>0 ?
                <Card className='card_layout card-bg-image'>
                    <div>
                        {graphdata ?
                            <DecompositionTreeGraph data={graphdata} />
                            : "Loading.."}
                    </div>
                </Card>
                : <div className='loading'><img src={SvgLogo} className="App-logo" alt="logo" /></div>}
        </>
    )
}
export default Dashboard
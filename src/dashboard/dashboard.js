
import { Checkbox, Button, Card } from 'antd';
import { useState, useEffect } from 'react';
import DecompositionTreeGraph from '../graph/multiRelationgraph';
import OrganizationGraphs from '../graph/organizationGraph.js';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import SvgLogo from "../loader.svg";
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
                <Card className='card_layout'>
                    <div className='filter'>
                        <div className='strict_line'>
                            <span>Filter</span>
                            <button onClick={() => { setisfilter(!isfilter) }}>{isfilter ? <CaretUpOutlined /> : <CaretDownOutlined />}</button>
                        </div>
                        {isfilter ?
                            <div className="rbutton">
                                <div className='check-boxes'>
                                    <div className='left_box'><span className='subheading'>Domains</span>
                                        <div className='domain_checkboxs'>
                                            <Checkbox.Group
                                                style={{
                                                    width: '100%',
                                                }}
                                                options={domainOptions}
                                                defaultValue={domainOptions}
                                                onChange={onChangesubdomain}
                                            >

                                            </Checkbox.Group>
                                        </div>
                                    </div>
                                    <div className='right_box'><span className='subheading'>Sub Domains</span>
                                        <div className='subdomain_checkboxs'>
                                            <Checkbox.Group
                                                style={{
                                                    width: '100%',
                                                }}
                                                options={subdomainOptions}
                                                defaultValue={subdomainOptions}
                                                onChange={onChangedomain}
                                            >

                                            </Checkbox.Group>
                                        </div>
                                    </div>

                                </div>

                                <div className='button-option'>
                                    <Button type="primary" >
                                        Apply
                                    </Button>
                                </div>
                            </div>
                            : ""
                        }

                    </div>
                    <div className='decompose-tree'>
                        {graphdata ?
                            <DecompositionTreeGraph data={graphdata} />
                            : "Loading.."}
                    </div>
                    <div className='organization-tree'>
                        <OrganizationGraphs />
                    </div>
                </Card>
                : <div className='loading'><img src={SvgLogo} className="App-logo" alt="logo" /></div>}
        </>
    )
}
export default Dashboard
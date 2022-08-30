import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Button, Menu, Collapse, Select, Col, Divider, Row, Space } from 'antd';
import { useState, useEffect } from 'react';
const { Panel } = Collapse;
const { Option } = Select;

const Filter = () => {
    const [isfilter, setisfilter] = useState(true);
    const [isdomain, setisdomain] = useState(true);
    const [issubdomain, setissubdomain] = useState(true);
    const [graphdata, setgraphdata] = useState(null);
    const [domainOptions, setdomainOptions] = useState([]);
    const [subdomainOptions, setsubdomainOptions] = useState([]);

    const onChangedomain = (e) => {
        setisdomain(!isdomain);
        // console.log(e);
    };

    const onChangesubdomain = (e) => {
        setissubdomain(!issubdomain);
        // console.log(`checked = ${e}`);
    };

    useEffect(() => {
        fetch('https://25685736-c4d7-417f-908b-ec718f54f275.mock.pstmn.io/v1/getgraphdata')
            .then(data => data.json())
            .then(datas => {
                setgraphdata(datas.graphdata);
                let domain = [];
                let subdomain = [];
                datas.graphdata.nodes?.forEach(data => {
                    if (!domain.includes(data.value.items[1].value.toString())) {
                        domain.push(data.value.items[1].value.toString());
                    }
                    if (!subdomain.includes(data.value.items[2].value.toString())) {
                        subdomain.push(data.value.items[2].value.toString());
                    }
                });
                domain.sort();
                subdomain.sort();
                setdomainOptions(domain);
                setsubdomainOptions(subdomain)
            })

    }, []);

    const onChange = (key) => {
        console.log(key);
      };

    return (
        <>
            <>
                <Row>
                    <Col span={24}>
                        <Collapse className="site-collapse-custom-collapse" expandIconPosition="end" defaultActiveKey={['1']} onChange={onChange}>
                            <Panel key="1" header="" style={{fontSize:"25px"}}>
                                <Row>
                                    <Col span={8}>
                                    <Space>
                                            <Checkbox.Group
                                                style={{
                                                    width: '100%',
                                                }}
                                                options={domainOptions}
                                                defaultValue={domainOptions}
                                                onChange={onChangesubdomain}
                                            >

                                            </Checkbox.Group>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        <Space>
                                            <Checkbox.Group
                                                style={{
                                                    width: '100%',
                                                }}
                                                options={subdomainOptions}
                                                defaultValue={subdomainOptions}
                                                onChange={onChangedomain}
                                            >

                                            </Checkbox.Group>
                                        </Space>
                                    </Col>
                                    <Col span={8}>
                                        {/* <Space> */}
                                            {/* <Select
                                                defaultValue="Global View"
                                                style={{
                                                    width: '100%',
                                                }}
                                                onChange={handleChange}
                                            >
                                                <Option value="Default">Global View</Option>
                                                <Option value="Global">Global</Option>
                                            </Select> */}
                                            <Button type="primary" > Apply </Button>
                                        {/* </Space> */}
                                    </Col>
                                </Row>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </>
        </>
    )
}

export default Filter;
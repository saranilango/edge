import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Button, Collapse, Col, Row, Space } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;

const Filter = (props) => {
    const defaultdomainvalue=props.data.domain.map(e=>e.value);
    const defaultsubdomainvalue=props.data.subdomain.map(e=>e.value);
        const [domainvalue,setdomainvalue]=useState(defaultdomainvalue);
        const [subdomainvalue,setsubdomainvalue]=useState(defaultsubdomainvalue);
        const onChangedomain = (e) => {
            setdomainvalue(e);
        };
        const onChangesubdomain = (e) => {
            setsubdomainvalue(e);
            // console.log(`checked = ${e}`);
        };
        // const handleChange = (value) => {
        //     console.log(`selected ${value}`);
        // };
    return (
        <>
            <>
                <Row>
                    <Col span={24}>
                        <Collapse className="site-collapse-custom-collapse" expandIconPosition="end" defaultActiveKey={['1']} >
                            <Panel key="1" header="" style={{fontSize:"25px"}}>
                                <Row>
                                    <Col span={8}>
                                    <Space>
                                            <Checkbox.Group
                                                style={{
                                                    width: '100%',
                                                }}
                                                options={props.data.domain}
                                                defaultValue={defaultdomainvalue}
                                                onChange={onChangedomain}
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
                                                options={props.data.subdomain}
                                                defaultValue={defaultsubdomainvalue}
                                                onChange={onChangesubdomain}
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
                                            <Button type="primary" onClick={()=>{props.onsubmit(domainvalue,subdomainvalue)}}>Apply </Button>
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
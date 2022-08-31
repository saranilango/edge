import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Button, Collapse, Col, Row, Space } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;

const Filter = (props) => {
    console.log(props.data.totalSubdomain);
    const defaultsubdomainvalue = props.data.subdomain.map(e => e.value);
    const [domainvalue, setdomainvalue] = useState(props.data.domain);
    const [subdomainvalue, setsubdomainvalue] = useState(defaultsubdomainvalue);
    const [showTab, setshowTab] = useState(true);
    const onChangedomain = (e) => {
        setdomainvalue(e);
    };
    const onChangesubdomain = (e) => {
        setsubdomainvalue(e);
        // console.log(`checked = ${e}`);
    };
    const showfilter = ()=>{
        console.log('setshowTab:', showTab);
        setshowTab(!showTab)
    }
    return (
        <>
            <div className={showTab ? 'filterOptionArea': 'filterOptionArea show'}>
                <div className='checkBoxGroup'>
                    <div>
                        <Checkbox.Group
                            style={{
                                width: '100%',
                            }}
                            options={domainvalue}
                            value={domainvalue}
                        >

                        </Checkbox.Group>
                    </div>
                    <div>
                        <Checkbox.Group
                            style={{
                                width: '100%',
                            }}
                            options={props.data.totalSubdomain}
                            defaultValue={subdomainvalue}
                            onChange={onChangesubdomain}
                        >

                        </Checkbox.Group>
                    </div>
                </div>
                <div className='btnGrp'>
                    <Button type="primary" onClick={() => { props.onsubmit(subdomainvalue) }}>Apply </Button>
                    <div onClick={showfilter}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 36 36"><path fill="#ffffff" d="m24 30-10-9.95h20Z"/></svg></div>
                </div>
            </div>
            {/* <Row>
                <Col span={24}>
                    <Collapse className="site-collapse-custom-collapse" expandIconPosition="end" defaultActiveKey={['1']} >
                        <Panel key="1" header="" style={{ fontSize: "25px" }}>
                            <Row>
                                <Col span={8}>
                                    <Space>

                                    </Space>
                                </Col>
                                <Col span={8}>
                                    <Space>

                                    </Space>
                                </Col>
                                
                            </Row>
                        </Panel>
                    </Collapse>
                </Col>
            </Row> */}
        </>
    )
}

export default Filter;
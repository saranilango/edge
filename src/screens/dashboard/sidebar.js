import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Button, Menu, Collapse, Select } from 'antd';
import { useState, useEffect } from 'react';
const { Panel } = Collapse;
const { Option } = Select;

const Sidebar = () => {
    const [isfilter, setisfilter] = useState(true);
    const [isdomain, setisdomain] = useState(true);
    const [issubdomain, setissubdomain] = useState(true);
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
                setdomainOptions(domain);
                setsubdomainOptions(subdomain)
            })

    }, []);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

    return (
        <div>
            <Menu>
                <Menu.Item>Filter</Menu.Item>
            </Menu>
            <h2 className="sidebarh2">Filter</h2>
            <Select
                defaultValue="Default"
                style={{
                    width: '100%',
                }}
                onChange={handleChange}
            >
                <Option value="Default">Default</Option>
                <Option value="Global">Global</Option>
            </Select>
            {isfilter ? <Collapse>
                <Panel header="Domains" key="1">
                    <Checkbox.Group
                        style={{
                            width: '100%',
                        }}
                        options={domainOptions}
                        defaultValue={domainOptions}
                        onChange={onChangesubdomain}
                    >

                    </Checkbox.Group>
                </Panel>
                <Panel header="Sub Domains" key="2">
                    <Checkbox.Group
                        style={{
                            width: '100%',
                        }}
                        options={subdomainOptions}
                        defaultValue={subdomainOptions}
                        onChange={onChangedomain}
                    >

                    </Checkbox.Group>
                </Panel>

            </Collapse> : null}
            <Menu>
                <Menu.Item> <Button type="primary" > Apply </Button></Menu.Item>
            </Menu>
        </div>
    )
}

export default Sidebar;
import { React, useState, useMemo } from "react";
import "antd/dist/antd.css";
import { Checkbox, Button, Tabs, Radio, Select, Space, Col, Row } from "antd";

import { MultiSelect } from "react-multi-select-component";
const { Option } = Select;

const domainOptions = [
    { label: "creditcard", value: "Credit Card" },
    { label: "debitcard", value: "Debit Card" },
    { label: "forexcard", value: "Forex Card" },
];
const subDomainOptions = [
    { label: "creditcard", value: "Credit Card" },
    { label: "debitcard", value: "Debit Card" },
    { label: "emicard", value: "EMI Card" },
];
const CheckboxGroup = Checkbox.Group;
const { TabPane } = Tabs;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Filter = (props) => {
    const [direction, setDirection] = useState('LR');
    const [showTab, setshowTab] = useState(true)
    const [domainselected, setDomainSelected] = useState([]);
    const [subdomainselected, setSubDomainSelected] = useState([]);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        props.data.direction = setDirection(e.target.value);
    };
    return (

        <div className="filterOptionArea show">
            {showTab ?
                <div>
                    <Row>
                        <Col span={12}>
                            <MultiSelect className="paddingfive"
                                options={domainOptions}
                                style={{ backgroundColor: "#1b1d36", }}
                                value={domainselected}
                                onChange={setDomainSelected}
                                labelledBy="Select "
                            />
                        </Col>
                        <Col span={12}>
                            <MultiSelect
                                options={subDomainOptions}
                                value={subdomainselected}
                                onChange={setSubDomainSelected}
                                labelledBy="Select"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <MultiSelect className="paddingfive"
                                options={domainOptions}
                                value={domainselected}
                                onChange={setDomainSelected}
                                labelledBy="Select"
                            />
                        </Col>
                        <Col span={12}>
                            <MultiSelect
                                options={subDomainOptions}
                                value={subdomainselected}
                                onChange={setSubDomainSelected}
                                labelledBy="Select"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} className="paddingfive">
                            <label>Layout Direction</label>&nbsp;&nbsp;
                            <Radio.Group onChange={onChange} value={direction}>
                                <Radio value='LR'>Horizontal</Radio>
                                <Radio value='TB'>Vertical</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Button
                                    type="primary" danger
                                    onClick={() => {
                                        props.oncancel(direction);
                                    }}
                                >
                                    Cancel{" "}
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        props.onsubmit(direction);
                                    }}
                                >
                                    Apply{" "}
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </div>
                : ""}
            <br></br>
        </div>
    );
};

export default Filter;

import { React, useState, useMemo } from "react";
import "antd/dist/antd.css";
import { Checkbox, Button, Collapse, Col, Row, Space, Tabs, Radio } from "antd";

const CheckboxGroup = Checkbox.Group;
const OperationsSlot = {
    left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
    right: <Button>Right Extra Action</Button>,
};
const { TabPane } = Tabs;
const { Panel } = Collapse;
const options = ["left", "right"];


const Filter = (props) => {
    const [position, setPosition] = useState(["left", "right"]);
    const [direction, setDirection] = useState('LR');
    const [showTab, setshowTab] = useState(true);

    // const slot = useMemo(() => {
    //     if (position.length === 0) return null;
    //     return position.reduce(
    //         (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
    //         {}
    //     );
    // }, [position]);

    // console.log(props.data.totalSubdomain);
    // const defaultsubdomainvalue = props.data.subdomain.map((e) => e.value);
    // const [domainvalue, setdomainvalue] = useState(props.data.domain);
    const [subdomainvalue, setsubdomainvalue] = useState(null);
   
    // const onChangedomain = (e) => {
    //     setdomainvalue(e);
    // };
    // const onChangesubdomain = (e) => {
    //     //console.log(e.target.checked);
    //     if (e.target.checked) {
    //         setsubdomainvalue([...subdomainvalue, e.target.value.toString()])
    //     } else {
    //         setsubdomainvalue(subdomainvalue.filter(ele => ele != e.target.value.toString()))
    //     }
    // };
    const showfilter = () => {
        console.log("setshowTab:", showTab);
        setshowTab(!showTab);
    };
    // const domainKeys = Object.keys(props.data.dependencyData);


    // const dataFun = (dat) => {
    //     let sdata = [];
    //     dat.forEach((element, i) => {
    //         sdata.push(<Checkbox value={element[0]} key={element[0]} defaultChecked={subdomainvalue.includes(element[0])} onChange={(e) => { onChangesubdomain(e) }}>{element[1]}</Checkbox>);
    //     })
    //     return sdata
    // }

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        props.data.direction = setDirection(e.target.value);
    };
    return (
        <>

            <div className="filterOptionArea show">
                <div className="filtertop">
                    <span>{!showTab ? "Filter" : ""}</span>
                    <div className={showTab ? "toggle upsvg" : "toggle"} onClick={showfilter}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 32 32"
                        >
                            <path fill="#ffffff" d="m24 30-10-9.95h20Z" />
                        </svg>
                    </div>
                </div>
                <div className="filcontent">
                    {showTab ? <>
                        {/* <div className="checkBoxGroup">
                            <Tabs>
                                {domainKeys.map((ele, index) => (
                                    <TabPane tab={ele} key={index}>
                                        {dataFun(props.data.dependencyData[ele])}
                                    </TabPane>)
                                )}
                            </Tabs>
 
                        </div> */}
                        <div className="checkBoxGroup">
                            <Radio.Group onChange={onChange} value={direction} optionType="button">
                                <Radio value='LR'>Left To Right</Radio>
                                <Radio value='TB'>Tob To Bottom</Radio>
                            </Radio.Group>
                        </div>
                        <div className="btnGrp">
                            <Button
                                type="primary"
                                onClick={() => {
                                    props.onsubmit(direction);
                                }}
                            >
                                Apply{" "}
                            </Button>
                        </div></> : ""}
                    <br></br>
                </div>
            </div>

        </>
    );
};

export default Filter;

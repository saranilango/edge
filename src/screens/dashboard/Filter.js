import { React, useState, useMemo } from "react";
import "antd/dist/antd.css";
import { Checkbox, Button, Tabs, Radio } from "antd";

const CheckboxGroup = Checkbox.Group;
const { TabPane } = Tabs;



const Filter = (props) => {
    const [direction, setDirection] = useState('LR');
    const [showTab, setshowTab] = useState(true)
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        props.data.direction = setDirection(e.target.value);
    };
    return (
        <>
            <div className="filterOptionArea show">
                {showTab ?
                    <div className="filter-justify">
                        <Radio.Group onChange={onChange} value={direction}>
                            <Radio value='LR'>Horizontal</Radio>
                            <Radio value='TB'>Vertical</Radio>
                        </Radio.Group>
                        <Button
                            type="primary"
                            onClick={() => {
                                props.onsubmit(direction);
                            }}
                        >
                            Apply{" "}
                        </Button>
                    </div>
                    : ""}
                <br></br>
            </div>
        </>
    );
};

export default Filter;

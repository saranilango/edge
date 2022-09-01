import { React, useState, useMemo } from "react";
import "antd/dist/antd.css";
import { Checkbox, Button, Collapse, Col, Row, Space, Tabs } from "antd";

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

  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {}
    );
  }, [position]);

  console.log(props.data.totalSubdomain);
  const defaultsubdomainvalue = props.data.subdomain.map((e) => e.value);
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
  const showfilter = () => {
    console.log("setshowTab:", showTab);
    setshowTab(!showTab);
  };
  console.log('domainvalue:', domainvalue); 
  console.log('props.data.totalSubdomain:', props.data.totalSubdomain);
  return (
    <>
      <div className={showTab ? "filterOptionArea" : "filterOptionArea show"}>
        <div className="checkBoxGroup">
            <Tabs>
              <TabPane tab={domainvalue[0]} key="1">
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                  options={props.data.totalSubdomain}
                  defaultValue={subdomainvalue}
                  onChange={onChangesubdomain}
                ></Checkbox.Group>
              </TabPane>
              <TabPane tab={domainvalue[1]} key="2">
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                  options={props.data.totalSubdomain}
                  defaultValue={subdomainvalue}
                  onChange={onChangesubdomain}
                ></Checkbox.Group>
              </TabPane>
              <TabPane tab={domainvalue[2]} key="3">
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                  options={props.data.totalSubdomain}
                  defaultValue={subdomainvalue}
                  onChange={onChangesubdomain}
                ></Checkbox.Group>
              </TabPane>
            </Tabs>
          {/* <div>
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              options={domainvalue}
              value={domainvalue}
            ></Checkbox.Group>
          </div> */}
          {/* <div>
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              options={props.data.totalSubdomain}
              defaultValue={subdomainvalue}
              onChange={onChangesubdomain}
            ></Checkbox.Group>
          </div> */}
        </div>
        <div className="btnGrp">
          <Button
            type="primary"
            onClick={() => {
              props.onsubmit(subdomainvalue);
            }}
          >
            Apply{" "}
          </Button>
          <div onClick={showfilter}>
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
  );
};

export default Filter;

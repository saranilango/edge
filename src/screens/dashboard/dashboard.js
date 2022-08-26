import { DownOutlined } from "@ant-design/icons";
import {
  Dropdown,
  Menu,
  Space,
  Typography,
  Checkbox,
  Col,
  Row,
  Button,
  Collapse,
  Card,
} from "antd";

import DecompositionTreeGraph from "../../components/graph/multiRelationGraph";
// import OrganizationGraphs from "../../components/graph/organizationGraph";

const { Panel } = Collapse;

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={["1"]}
    items={[
      {
        key: "1",
        label: "Default",
      },
      {
        key: "2",
        label: "Global",
      },
    ]}
  />
);

function Dashboard() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Card>
      <Space>
        <Collapse collapsible="header" defaultActiveKey={["1"]}>
          <Panel key="1">
            <Row>
              <Col span={8}>
                <Checkbox onChange={onChange}>Domain</Checkbox>
                <Checkbox onChange={onChange}>Sub Domain</Checkbox>
              </Col>
              <Col span={8}>
                <Dropdown overlay={menu}>
                  <Typography.Link>
                    <Space>
                      Selectable
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Dropdown>
              </Col>
              <Col span={8}>
                <Button type="primary" block>
                  Apply
                </Button>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </Space>
      <div>
        <DecompositionTreeGraph />
      </div>
    </Card>
  );
}
export default Dashboard;

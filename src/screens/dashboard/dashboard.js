
import { Card } from 'antd';
import DecompositionTreeGraph from '../../components/graph/multiRelationGraph';
// import OrganizationGraphs from '../../components/graph/organizationGraph.js';
// import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import SvgLogo from "../../loader.svg";
function Dashboard(props) {
    return (
                <Card className='card_layout card-bg-image'>
                    <div>
                        {props.data?.nodes?.length>0 ?
                            <DecompositionTreeGraph data={props.data} />
                            : 
                            "No data"}
                    </div>
                </Card>
    )
}
export default Dashboard
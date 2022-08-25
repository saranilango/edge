
import { Checkbox } from 'antd';
import DecompositionTreeGraph from '../graph/multiRelationGraph.js';
import OrganizationGraphs from '../graph/organizationGraph.js';

function Dashboard() {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div>
            <div className="rbutton">
                <Checkbox onChange={onChange}>Domain</Checkbox>
                <Checkbox onChange={onChange}>Sub Domain</Checkbox>
            </div>
            <div>
                <DecompositionTreeGraph />
            </div>
            <div>
                <OrganizationGraphs /> 
            </div>
        </div>
    )
}
export default Dashboard
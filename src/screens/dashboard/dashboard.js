
import { Checkbox } from 'antd';
import DecompositionTreeGraph from '../../components/graph/multiRelationGraph';
import OrganizationGraphs from '../../components/graph/organizationGraph';

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
            {/* <div>
                <OrganizationGraphs /> 
            </div> */}
        </div>
    )
}
export default Dashboard
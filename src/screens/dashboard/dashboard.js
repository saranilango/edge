
import { Card,Carousel } from 'antd';
import DecompositionTreeGraph from '../../components/graph/multiRelationGraph';
// import OrganizationGraphs from '../../components/graph/organizationGraph.js';
// import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import SvgLogo from "../../loader.svg";
function Dashboard(props) {
    const contentStyle = {
        height: '250px',
        margin: '30px;',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    let fg = [];
    [1, 2, 3, 4].map(e => {
        fg.push(<div style={contentStyle} className="cancur">
            <DecompositionTreeGraph data={props.data} />
        </div>)
    })
    return (
        <>
            {props.dropdownstate === "default" ?
                <Card className='card_layout card-bg-image'>
                    <div>
                        {props.data?.nodes?.length > 0 ?
                            <DecompositionTreeGraph data={props.data} />
                            :
                            "No data"}
                    </div>
                </Card> :
                <Carousel dotPosition={"bottom"} className="cur" dots={{ className: "colr" }}>
                    {fg}
                </Carousel>
            }
        </>

    )
}
export default Dashboard
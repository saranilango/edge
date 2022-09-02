
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
    let curdata = [];
    props.carouseldata?.forEach((e,i) => {
        curdata.push(<div style={contentStyle} className="cancur" key={i}>
            <DecompositionTreeGraph data={e}  />
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
                    {curdata}
                </Carousel>
            }
        </>

    )
}
export default Dashboard
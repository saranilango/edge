import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RadialGraph } from '@ant-design/graphs';
import LineFlowAnalysisGraph from './lineFlowAnalysesGraph';
import LayoutFlowAnalysisGraph from './layoutFlowAnalysesGraph';
import { Button } from 'antd';
const RadialData = {
    nodes: [],
    edges: []
};
const newRadialData =
{
    "nodes": [
        {
            "id": "182",
            "label": "second.data_product"
        },
        {
            "id": "340",
            "label": "first.data_product"
        },
        {
            "id": "398",
            "label": "third.data_product"
        },
        {
            "id": "432",
            "label": "fourth.data_product"
        },
        {
            "id": "274",
            "label": "fifth.data_product"
        },
        {
            "id": "432",
            "label": "fourth.data_product"
        },
        {
            "id": "182",
            "label": "second.data_product"
        },
        {
            "id": "340",
            "label": "first.data_product"
        },
        {
            "id": "398",
            "label": "third.data_product"
        }
    ],
    "edges": [
        {
            "source": "340",
            "target": "182"
        },
        {
            "source": "182",
            "target": "398"
        },
        {
            "source": "432",
            "target": "274"
        },
        {
            "source": "340",
            "target": "182"
        },
        {
            "source": "182",
            "target": "398"
        }
    ],
    "domains": [
        [
            {
                "id": 167,
                "name": "second.domain",
                "filtered": true
            },
            {
                "id": 366,
                "name": "third.domain",
                "filtered": true
            },
            {
                "id": 672,
                "name": "first.domain",
                "filtered": true
            }
        ]
    ],
    "subdomains": [
        [
            {
                "id": 111,
                "name": "second.sub_domain",
                "filtered": true
            },
            {
                "id": 361,
                "name": "first.sub_domain",
                "filtered": false
            },
            {
                "id": 614,
                "name": "fourth.sub_domain",
                "filtered": true
            },
            {
                "id": 859,
                "name": "third.sub_domain",
                "filtered": false
            }
        ]
    ],
    "node": [
        [
            {
                "id": 126,
                "name": "second.node",
                "filtered": false
            },
            {
                "id": 154,
                "name": "first.node",
                "filtered": false
            },
            {
                "id": 303,
                "name": "fourth.node",
                "filtered": false
            },
            {
                "id": 490,
                "name": "third.node",
                "filtered": true
            },
            {
                "id": 669,
                "name": "fifth.node",
                "filtered": false
            }
        ]
    ],
    "types": [
        [
            "isSourceDp",
            "isConsumerDp",
            "isAggregateDp"
        ]
    ]
}
const RadialDataNode = Object.keys(newRadialData).
    filter((key) => key.includes('nodes')).
    reduce((cur, key) => { return Object.assign(cur, { [key]: newRadialData[key] }) }, {});
console.log('RadialDataNode:', RadialDataNode);
RadialData.nodes = RadialDataNode.nodes;
const RadialDataEdge = Object.keys(newRadialData).
    filter((key) => key.includes('edges')).
    reduce((cur, key) => { return Object.assign(cur, { [key]: newRadialData[key] }) }, {});
RadialData.edges = RadialDataEdge.edges;
console.log('RadialDataEdge:', JSON.stringify(RadialData));

const DemoRadialGraph = (props) => {
    const chartRef = useRef();
    const [selectednode, setSelectednode] = useState([]);
    const [isRadial, setisRadial] = useState(true);
    const [isLineGraph, setisLineGraph] = useState(true);
    const config = {
        data: RadialData,
        autoFit: true,
        layout: {
            unitRadius: 80,
            nodeSize: 20,
            nodeSpacing: 10,
        },
        nodeCfg: {
            asyncData,
            size: 20,
            style: {
                fill: '#6CE8DC',
                stroke: '#6CE8DC',
            },
            labelCfg: {
                style: {
                    fontSize: 5,
                    fill: '#000',
                },
            },
        },

        edgeCfg: {
            style: {
                lineWidth: 1,
            },
            endArrow: {
                d: 10,
                size: 1,
            },
            hover: {
                stroke: '#1890ff',
                lineWidth: 1,
            },
            animate: true
        },
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        onReady: (graph) => {
            chartRef.current = graph;
            graph.on('node:dblclick', (evt) => {
                const item = evt.item;
                console.log('Node items:', item)
                setSelectednode(selectednode => [...selectednode, item._cfg.children]);
                setisRadial(false);
            });
        },
    };
    useEffect(() => {
        console.log('selectednode in radial:', props.data.graphDirection);
        if (props.data.graphDirection === "TB") {
            setisLineGraph(false);
        } else {
            setisLineGraph(true)
        }

    });
    function setGotoRadial() {
        setisRadial(true)
    }
    function asyncData() {
        return '';
    }

    return (
        <div>
            {isRadial ?
                <div><RadialGraph {...config} /> </div> :
                <div>
                    {isLineGraph ?
                        <LineFlowAnalysisGraph data={{ "flowdirection": props.data.graphDirection }} />
                        :
                        <LayoutFlowAnalysisGraph data={{ "layoutGraphDirection": props.data.layoutGraphDirection }} />
                    }
                    <div><Button type="primary" onClick={setGotoRadial}>Back</Button></div>

                    <br></br>
                </div>}
        </div>
    );

};

export default DemoRadialGraph;
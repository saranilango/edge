import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RadialGraph } from '@ant-design/graphs';
import LineFlowAnalysisGraph from './lineFlowAnalysesGraph';
import LayoutFlowAnalysisGraph from './layoutFlowAnalysesGraph';
import { Button } from 'antd';
import axios from 'axios';

// const RadialData = {
//     nodes: [],
//     edges: []
// };
// const newRadialData =
// {

// }


const DemoRadialGraph = (props) => {
    const chartRef = useRef();
    const [selectednode, setSelectednode] = useState([]);
    const [isRadial, setisRadial] = useState(true);
    const [isLineGraph, setisLineGraph] = useState(true);
    const [newRadialData, setNewRadialData] = useState({});
    const [RadialData, setRadialData] = useState({
        nodes: [],
        edges: []
    })
    let config = {
        data: RadialData !== undefined && RadialData.edges!==undefined && RadialData.nodes!==undefined ? RadialData : { nodes: [], edges: [] },
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
    function prepareGraphData() {
        const RadialDataNode = Object.keys(newRadialData).
            filter((key) => key.includes('nodes')).
            reduce((cur, key) => { return Object.assign(cur, { [key]: newRadialData[key] }) }, {});
        // console.log('RadialDataNode:', RadialDataNode);
        RadialData.nodes = RadialDataNode.nodes;
        const RadialDataEdge = Object.keys(newRadialData).
            filter((key) => key.includes('edges')).
            reduce((cur, key) => { return Object.assign(cur, { [key]: newRadialData[key] }) }, {});
        RadialData.edges = RadialDataEdge.edges;
        // console.log('RadialDataEdge:', JSON.stringify(RadialData));
        console.log('server RadialData', config);
    }


    useEffect(() => {
        console.log('selectednode in radial:', props.data.graphDirection);
        getUser();
        if (props.data.graphDirection === "TB") {
            setisLineGraph(false);
        } else {
            setisLineGraph(true)
        }

    }, []);


    useEffect(() => {
        prepareGraphData();
    }, [newRadialData]);

    async function getUser() {
        const getDataUrl = 'http://127.0.0.1:8000/api/domain/';
        const payload = {
            "dom_id": [],
            "sub_id": [],
            "node_id": [],
            "types_id": []
        }

        try {
            const response = await axios.post(getDataUrl, payload);
            console.log('server response', response.data);
            let jsonString = JSON.stringify(response.data);
            // console.log('server response', jsonString);
            let withoutQuotes = jsonString.replace(/"([^"]+)":/g, '$1:');
             console.log('type', typeof(withoutQuotes), 'withoutQuotes withoutQuotes:', withoutQuotes);
            RadialData.nodes = JSON.parse(jsonString).nodes;
            RadialData.edges =  JSON.parse(jsonString).edges;
            setNewRadialData(RadialData);
            // console.log('server RadialData', RadialData);

        } catch (error) {
            console.error(error);
        }
    }
    function setGotoRadial() {
        setisRadial(true)
    }
    function asyncData() {
        return '';
    }

    return (

        <>
            {/* <div>{JSON.stringify(config.data)}</div> */}
            {isRadial ?
                <RadialGraph {...config} />  :
                <div>
                    {isLineGraph ?
                        <LineFlowAnalysisGraph data={{ "flowdirection": props.data.graphDirection }} />
                        :
                        <LayoutFlowAnalysisGraph data={{ "layoutGraphDirection": props.data.layoutGraphDirection }} />
                    }
                    <div><Button type="primary" onClick={setGotoRadial}>Back</Button></div>

                    <br></br>
                </div>}
        </>
    );

};

export default DemoRadialGraph;
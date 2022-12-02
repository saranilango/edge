import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RadialGraph } from '@ant-design/graphs';
import LineFlowAnalysisGraph from './lineFlowAnalysesGraph';
import LayoutFlowAnalysisGraph from './layoutFlowAnalysesGraph';
import { Button } from 'antd';
const RadialData = {
    nodes: [
        {
            id: '0',
            label: '0',
        },
        {
            id: '1',
            label: '1',
        },
        {
            id: '2',
            label: '2',
        },
        {
            id: '3',
            label: '3',
        },
        {
            id: '4',
            label: '4',
        },
        {
            id: '5',
            label: '5',
        },
        {
            id: '6',
            label: '6',
        },
        {
            id: '7',
            label: '7',
        },
        {
            id: '8',
            label: '8',
        },
        {
            id: '9',
            label: '9',
        },
    ],
    edges: [
        {
            source: '0',
            target: '1',
        },
        {
            source: '0',
            target: '2',
        },
        {
            source: '0',
            target: '3',
        },
        {
            source: '0',
            target: '4',
        },
        {
            source: '0',
            target: '5',
        },
        {
            source: '0',
            target: '6',
        },
        {
            source: '0',
            target: '7',
        },
        {
            source: '0',
            target: '8',
        },
        {
            source: '0',
            target: '9',
        },
    ],
};
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
        behaviors: ['drag-canvas','zoom-canvas', 'drag-node'],
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
                </div>}
        </div>
    );

};

export default DemoRadialGraph;
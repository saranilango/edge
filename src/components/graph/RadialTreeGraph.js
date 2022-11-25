
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RadialTreeGraph } from '@ant-design/graphs';
import DemoFlowAnalysisGraph from './flowAnalysesGraph';
import { Button } from 'antd';
const RadialTreeGraphs = (props) => {
    const [selectednode, setSelectednode] = useState([]);
    const [isRadial, setisRadial] = useState(true);

    const themeColor = '#73B3D1';
    const radialdata = {
        id: 'Modeling Methods',
        children: [
            {
                id: 'Classification',
                children: [
                    { id: 'Logistic regression', value: 'Logistic regression' },
                    { id: 'Linear discriminant analysis', value: 'Linear discriminant analysis' },
                    { id: 'Rules', value: 'Rules' }
                ],
                value: 'Classification',
            },
            {
                id: 'Consensus',
                children: [
                    {
                        id: 'Models diversity',
                        children: [
                            { id: 'Different initializations', value: 'Different initializations' },
                            { id: 'Different parameter choices', value: 'Different parameter choices' },
                            { id: 'Different architectures', value: 'Different architectures' }
                        ],
                        value: 'Models diversity',
                    },
                    {
                        id: 'Methods',
                        children: [
                            { id: 'Classifier selection', value: 'Classifier selection' },
                            { id: 'Classifier fusion', value: 'Classifier fusion' },
                        ],
                        value: 'Methods',
                    },
                    {
                        id: 'Common',
                        children: [
                            { id: 'Bagging', value: 'Bagging' },
                            { id: 'Boosting', value: 'Boosting' },
                            { id: 'AdaBoost', value: 'AdaBoost' },
                        ],
                        value: 'Common',
                    },
                ],
                value: 'Consensus',
            },
            {
                id: 'Regression',
                children: [
                    { id: 'Multiple linear regression', value: 'Multiple linear regression' },
                    { id: 'Partial least squares', value: 'Partial least squares' },
                    {
                        id: 'Multi-layer feedforward neural network',
                        value: 'Multi-layer feedforward neural network',
                    },
                    { id: 'General regression neural network', value: 'General regression neural network' },
                    { id: 'Support vector regression', value: 'Support vector regression' },
                ],
                value: 'Regression',
            },
        ],
        value: 'Modeling Methods',
    };

    const radialConfig = {
        data: radialdata,
        animate: true,
        nodeCfg: {
            size: 40,
            type: 'circle',
            label: {
                style: {
                    fill: '#fff',
                }
            },
            style: {
                fill: themeColor,
                stroke: '#0E1155',
                lineWidth: 2,
                strokeOpacity: 0.45,
                shadowColor: themeColor,
                shadowBlur: 25,
            }
        },
        edgeCfg: {
            style: {
                stroke: themeColor,
                shadowColor: themeColor,
                shadowBlur: 20,
            },
            endArrow: {
                type: 'triangle',
                fill: themeColor,
                d: 15,
                size: 4,
            },
            edgeStateStyles: {
                hover: {
                    stroke: '#0044FF',
                    lineWidth: 2,
                },
            },
        },
        behaviors: ['scroll-canvas', 'drag-node'],
        onReady: (graph) => {
            console.log('props data:', props);
            graph.on('node:dblclick', (evt) => {
                const item = evt.item;
                console.log('Node items:', item)
                setSelectednode(selectednode => [...selectednode, item._cfg.children]);
                setisRadial(false);
                // graph.setItemState(item, 'hover', true);
            });
        }
    };

    useEffect(() => {
        console.log('selectednode:', selectednode); 
    });
    function setGotoRadial() {
        setisRadial(true)
    }
    return (
        <div>
            {isRadial ?
                <div>
                    <RadialTreeGraph {...radialConfig} />
                </div> :
                <div>
                    <DemoFlowAnalysisGraph data={{"flowdirection": props.data.graphDirection}}/>
                    <div><Button type="primary" onClick={setGotoRadial}>Back</Button></div>
                </div>
            }
        </div>
    )
};

export default RadialTreeGraphs 
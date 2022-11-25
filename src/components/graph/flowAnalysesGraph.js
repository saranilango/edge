import React , { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import { FlowAnalysisGraph } from '@ant-design/graphs';
const data = {
    nodes: [
        {
            id: '0',
            value: {
                title: "Methods",
                items: [
                    {
                        text: "Methods",
                        value: "",
                        icon: ""
                    }
                ]
            }
        },
        {
            id: '1',
            value: {
                title: "Classifier selection",
                items: [
                    {
                        text: "Classifier selection",
                        value: "",
                        icon: ""
                    }
                ]
            }
        },
        {
            id: '2',
            value: {
                title: "Classifier fusion",
                items: [
                    {
                        text: "Classifier fusion",
                        value: "",
                        icon: ""
                    }
                ]
            }
        }
    ],
    edges: [
        {
            source: '0',
            target: '1'
        },
        {
            source: '0',
            target: '2'
        }
    ],
  };
const config = {
    data,
    layout: {

    },
    nodeCfg: {
        items: {
            containerStyle: {
                fill: '#fff',
            },
            padding: 6,
            style: (cfg, group, type) => {
                const styles = {
                    icon: {
                        width: 12,
                        height: 12,
                    },
                    value: {
                        fill: '#f00',
                    },
                    text: {
                        fill: '#aaa',
                    },
                };
                return styles[type];
            },
        },
        nodeStateStyles: {
            hover: {
                stroke: '#1890ff',
                lineWidth: 2,
            },
        },
        title: {
            containerStyle: {
                fill: 'transparent',
            },
            style: {
                fill: '#000',
                fontSize: 12,
            },
        },
        style: {
            fill: '#E6EAF1',
            stroke: '#B2BED5',
            radius: [2, 2, 2, 2],
        },
    },
    edgeCfg: {
        label: {
            style: {
                fill: '#aaa',
                fontSize: 12,
                fillOpacity: 1,
            },
        },
        style: (edge) => {
            const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
            return {
                stroke,
                lineWidth: Math.random() * 10 + 1,
                strokeOpacity: 0.5,
            };
        },
        edgeStateStyles: {
            hover: {
                strokeOpacity: 1,
            },
        },
    },
    markerCfg: (cfg) => {
        const { edges } = data;
        return {
            position: 'right',
            show: edges.find((item) => item.source === cfg.id),
            collapsed: !edges.find((item) => item.source === cfg.id),
        };
    },
    behaviors: ['drag-canvas', 'scroll-canvas', 'drag-node'],
  };
  
const DemoFlowAnalysisGraph = (props) => {
    const [dataConfig, setDataConfig] = useState(config)
  useEffect(() => {
    console.log('props in flow analyses:', props);
    console.log('dataConfig:', dataConfig);
    dataConfig.layout.rankdir = props.data.flowdirection;
});
  return <FlowAnalysisGraph {...config} />;
};

export default  DemoFlowAnalysisGraph
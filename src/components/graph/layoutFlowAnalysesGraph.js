import React from 'react';
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
      rankdir: 'TB',
      ranksepFunc: () => 20,
    },
    nodeCfg: {
      anchorPoints: [
        [0.5, 0],
        [0.5, 1],
      ],
    },
    edgeCfg: {
      type: 'polyline',
      endArrow: true,
    },
    markerCfg: (cfg) => {
      return {
        position: 'bottom',
        show: data.edges.filter((item) => item.source === cfg.id)?.length,
      };
    },
    behaviors: ['drag-canvas', 'scroll-canvas', 'drag-node'],
  };

const LayoutFlowAnalysisGraph = () => {
  

  return <FlowAnalysisGraph {...config} />;
};

export default LayoutFlowAnalysisGraph;
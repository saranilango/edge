import React, { useState, useEffect } from 'react';
import { FlowAnalysisGraph } from '@ant-design/graphs';
import ModalComponent from '../../screens/dashboard/modal';

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


const LayoutFlowAnalysisGraph = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
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
      size: [140, 25],
      badge: {
        style: (cfg) => {
          const ids = ['-1'];
          const fill = ids.includes(cfg.id) ? '#c86bdd' : '#5ae859';
          return {
            fill,
            radius: [2, 0, 0, 2],
          };
        },
      },
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
      }
    },
    edgeCfg: {
      type: 'cubic',
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
          lineWidth: 2,
          strokeOpacity: 0.5,
        };
      },
      edgeStateStyles: {
        hover: {
          lineWidth: 2,
          strokeOpacity: 1,
        }
      }
    },
    markerCfg: (cfg) => {
      return {
        position: 'bottom',
        show: data.edges.filter((item) => item.source === cfg.id)?.length,
      };
    },
    behaviors: ['drag-canvas','zoom-canvas', 'drag-node'],
    onReady: (graph) => {
      graph.on('node:dblclick', (evt) => {
        openModal()
        console.log('layout evt:', evt);
      });
    }
  };
  function openModal() {
    setIsOpen(!modalIsOpen);
    console.log("props", modalIsOpen)
  }
  useEffect(() => {
    console.log('props in line flow', 'Inside :', modalIsOpen);
  }, [modalIsOpen]);
  return (
    <>
      <FlowAnalysisGraph {...config} />
      {modalIsOpen ? <ModalComponent data={{ "modalIsOpen": modalIsOpen, "modalIsOpen": openModal }}></ModalComponent> : ""}
    </>);
};

export default LayoutFlowAnalysisGraph;
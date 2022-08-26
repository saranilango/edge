import React from 'react';
import { FlowAnalysisGraph } from '@ant-design/graphs';

const DemoDecompositionTreeGraph = (props) => {
  // console.log(props.data);
  const data = props.data;
  
  const config = {
    data,
    autoFit: false,
    layout: {
      rankdir: 'TB',
      ranksepFunc: () => 30,
    },
    nodeCfg: {
      autoWidth:true,
      anchorPoints: [
        [0.5, 0],
        [0.5, 1],
      ],items: {
        layout: 'follow',
        
      },
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
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };



  return <FlowAnalysisGraph {...config} />;
};

export default DemoDecompositionTreeGraph; 
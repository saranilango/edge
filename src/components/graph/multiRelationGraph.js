import React from 'react';
import { FlowAnalysisGraph } from '@ant-design/graphs';

const DemoDecompositionTreeGraph = (props) => {
  // console.log(props.data);
  const data = props.data;
  const config = {
    data,
    autoFit: true,
    fitCenter:false,
    layout: {
      rankdir: 'TB',
      ranksepFunc: () => 30,
      nodesepFunc: () => 60,
    },
    nodeCfg: {
      autoWidth:true,
      anchorPoints: [
        [0.5, 0],
        [0.5, 1],
      ],items: {
        layout: 'follow',
        style: (cfg, group, type) => {
          const styles = {
            value: {
              fill: '#ff5722',    //color for values Ex:Data Product 1
              stroke:'#ffab91'
            },
            text: {
              fill: '#616161',    //color for text Ex:name,domain,subdomain
              stroke:'#bdbdbd'
            }
          };
          return styles[type];
        },
      },
      size:[150,40],//min width of the box
      title: {
        containerStyle:{
          fill: "#3f51b5",  //background color for Title
        }
      },
      nodeStateStyles: {
        hover: {
          fill:'#b9f6ca'  //this is node background-color when you hovering on node
        }
      },
      style: {
        stroke: '#3f51b5', // node border color
        lineWidth: 2,
      },
    },
    edgeCfg: {
      type: 'polyline',
      endArrow: true,
      edgeStateStyles:{
        hover: {
          stroke: '#009688',  // this is line color when you hovering on node or line
          lineWidth: 2,
        },
      }
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
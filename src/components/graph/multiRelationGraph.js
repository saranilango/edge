import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/graphs';

const DemoDecompositionTreeGraph = () => {
  // const data = {
  //   id: 'A0',
  //   value: {
  //     title: 'Parent',
  //     items: [
  //       {
  //         text: '3031',
  //       },
  //     ],
  //   },
  //   children: [
  //     {
  //       id: 'A1',
  //       value: {
  //         title: 'Children1',
  //         items: [
  //           {
  //             text: '1152',
  //           },
  //           {
  //             text: '1153',
  //             value: '30%',
  //           },
  //         ],
  //       },
  //       children: [
  //         {
  //           id: 'A11',
  //           value: {
  //             title: 'Children1.1',
  //             items: [
  //               {
  //                 text: '1153',
  //               },
  //               {
  //                 text: '1153',
  //                 value: '30%',
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           id: 'A12',
  //           value: {
  //             title: 'Children1.2',
  //             items: [
  //               {
  //                 text: '1154',
  //               },
  //               {
  //                 text: '1154',
  //                 value: '30%',
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           id: 'A13',
  //           value: {
  //             title: 'Children1.3',
  //             items: [
  //               {
  //                 text: '1155',
  //               },
  //               {
  //                 text: '1154',
  //                 value: '30%',
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       id: 'A2',
  //       value: {
  //         title: 'Children2',
  //         items: [
  //           {
  //             text: '595',
  //           },
  //           {
  //             text: '595',
  //             value: '30%',
  //             icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // };
  const data = {
    id: "A0",
    value: {
      title: "Data Product-1",
      items: [
        {
          text: "name",
          value: "Data Product 1",
        },
        {
          text: "domain",
          value: "Domain-8",
        },
        {
          text: "sub-domain",
          value: "Domain-81",
        },
      ],
    },
    children: [
      {
        id: "A1",
        value: {
          title: "Data Product-2",
          items: [
            {
              value: "Data Product 2",
              text: "name",
            },
            {
              text: "domain",
              value: "Domain-7",
            },
            {
              text: "sub-domain",
              value: "SubDomain-71",
            },
          ],
        },
        children: [
          {
            id: "A11",
            value: {
              title: "Data Product-10",
              items: [
                {
                  text: "name",
                  value: "Data Product 10",
                },
                {
                  text: "domain",
                  value: "Domain-4",
                },
                { text: "sub-domain", value: "None" },
              ],
            },
          },
          {
            id: "A12",
            value: {
              title: "Data Product-11",
              items: [
                {
                  text: "name",
                  value: "Data Product 11",
                },
                {
                  text: "domain",
                  value: "Domain-5",
                },
                { text: "sub-domain", value: "sub-domain-51" },
              ],
            },
          },
          {
            id: "A13",
            value: {
              title: "Data Product-101",
              items: [
                {
                  value: "Data Product 101",
                  text: "name",
                },
                {
                  text: "domain",
                  value: "Domain-5",
                },
                {
                  text: "sub-domain",
                  value: "None",
                },
              ],
            },
          },
          {
            id: "A14",
            value: {
              title: "Data Product-201",
              items: [
                {
                  value: "Data Product 201",
                  text: "name",
                },
                {
                  text: "domain",
                  value: "Domain-5",
                },
                {
                  text: "sub-domain",
                  value: "SubDomain-52",
                },
              ],
            },
          },
        ],
      },
      {
        id: "A2",
        value: {
          title: "Data Product-3",
          items: [
            {
              value: "Data Product 3",
              text: "name",
            },
            {
              text: "domain",
              value: "Domain-6",
            },
            {
              text: "sub-domain",
              value: "SubDomain-61",
            },
          ],
        },
      },
      {
        id: "A3",
        value: {
          title: "Data Product-4",
          items: [
            {
              value: "Data Product 4",
              text: "name",
            },
            {
              text: "domain",
              value: "Domain-7",
            },
            {
              text: "sub-domain",
              value: "SubDomain-72",
            },
          ],
        },
        children: [
          {
            id: "A111",
            value: {
              title: "Data Product-123",
              items: [
                {
                  text: "name",
                  value: "Data Product 123",
                },
                {
                  text: "domain",
                  value: "Domain-4",
                },
                { text: "sub-domain", value: "None" },
              ],
            },
          },
          {
            id: "A112",
            value: {
              title: "Data Product-007",
              items: [
                {
                  text: "name",
                  value: "Data Product 007",
                },
                {
                  text: "domain",
                  value: "Domain-3",
                },
                { text: "sub-domain", value: "SubDomain-37" },
              ],
            },
            children: [
              {
                id: "A1211",
                value: {
                  title: "Data Product-al-qaeda",
                  items: [
                    {
                      text: "name",
                      value: "Data Product Al Qaeda",
                    },
                    {
                      text: "domain",
                      value: "Domain-3",
                    },
                    { text: "sub-domain", value: "Domain-39" },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  };

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          [1, 2].map(() => ({
            id: 'A2' + Math.random().toString(),
            value: {
              title: 'Children' + Math.random().toString(),
              items: [
                {
                  text: '595',
                },
                {
                  text: 'Next Childres',
                  value: '50%',
                  icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                },
              ],
            },
          })),
        );
      }, 1000);
    });
  };

  const getChildren = async () => {
    const asyncData = await fetchData();
    return asyncData;
  };

  const config = {
    data,
    autoFit: false,
    nodeCfg: {
      autoWidth: true,
      items: {
        layout: 'follow',
      }, 
      getChildren,
    },
    markerCfg: (cfg) => {
      return {
        show: false,
      };
    },
    behaviors: ['drag-canvas', 'drag-node'],
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoDecompositionTreeGraph; 
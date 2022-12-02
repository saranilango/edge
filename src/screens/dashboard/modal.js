import React, { useState, useEffect } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Chart } from "react-google-charts";

export const data = [
    [
        
        {
            type: "datetime",
            id: "Date",
        },
        {
            type: "number",
            id: "Won/Loss",
        },
    ],

    [new Date("2022/10/4"), -10],
    [new Date("2022/10/5"), 2],
    [new Date("2022/10/7"), 10],
];

export const options = {
    title: "Calendar",
    colorAxis :{ colors: ['#FF0000','#FFBF00', '#00FF00']},
    calendar: {
        // underYearSpace: 10, // Bottom padding for the year labels.
        yearLabel: {
            fontName: 'Times-Roman',
            fontSize: 32,
            color: '#1890ff',
            bold: true,
        },
        monthLabel: {
            fontName: 'Times-Roman',
            fontSize: 16,
            color: '#1890ff',
            bold: true,
            italic: false
        },
        monthOutlineColor: {
            stroke: '#1890ff',
            strokeOpacity: 0.8,
            strokeWidth: 2
        },
        focusedCellColor: {
            stroke: '#1890ff',
            strokeOpacity: 1,
            strokeWidth: 1,
        }
    }
};

const ModalComponent = ((props, ref) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modelFromLineflow, setModalFromLineFlow] = useState(props.data.modalIsOpen);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        console.log('before close modal', props)
        setIsOpen(false);
        // setModalFromLineFlow(false)
        props.data.openModal(true);
        console.log('after close modal', modalIsOpen)
    }
    useEffect(() => {
        console.log('modalFromProps before:', props);
        if (modelFromLineflow) {
            console.log('Inside the nodel:', modelFromLineflow);
            openModal();
        }
    });

    
    return (
        <div>
            <Modal 
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className="modal-style"
                contentLabel="nodeModal"
                ariaHideApp={false}
            >
                <div className='filter-justify'>
                    <label ref={(_subtitle) => (subtitle = _subtitle)}>Node Details</label>
                    <CloseCircleOutlined style={{ fontSize: '20px' }} onClick={closeModal} />
                </div>
                <div>
                    <Tabs forceRenderTabPanel defaultIndex={0}>
                        <TabList className='primary-color'>
                            <Tab>Calendar</Tab>
                            <Tab>Methods 1</Tab>
                        </TabList>
                        <TabPanel>
                            <Chart
                                chartType="Calendar"
                                width="100%"
                                height="400px"
                                data={data}
                                options={options}
                                loader={<div>Loading Chart</div>}
                            />
                        </TabPanel>
                        <TabPanel>
                            <h2>Classifier Selection 1</h2>
                        </TabPanel>

                    </Tabs>
                </div>
            </Modal>
        </div>
    );
});

export default ModalComponent;
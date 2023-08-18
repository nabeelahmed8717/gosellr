import React, { useState } from 'react'
import "./viewBooking.scss"
import { Col, Modal, Row } from 'antd';
import userIconOne from "../../../../assets/raw/driver.png";

const ViewBooking = ({ isViewBookingsModal, setIsViewBookingsModal }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Modal footer={false} title="Booking Details" open={isViewBookingsModal} onOk={() => setIsViewBookingsModal(false)} onCancel={() => setIsViewBookingsModal(false)} okText="Close" >
            <div className="inner-bookings-view-wrapper">
                <div className="status-badge">Pending</div>

                <div className="seller-info-wrapper">
                    <div className="user-profile-wrapper">
                        <div className="user-image">
                            <img src={userIconOne} alt="" />
                            <div className="badge-is-online"></div>
                        </div>
                        <div className="user-details">
                            <div className="main-details">
                                <h2>Willam Marks</h2>
                                <p>Level : <span>08</span></p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <div className='label-wrapper fw-500'>Service Title :</div><div className='cont-wrapper'>Virtual Consult: Expert Advice at Your Fingertips</div>
                    </div>
                </div>


                <Row style={{padding:'20px'}}>
                    <Col lg={12}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div className='label-wrapper fw-500'>Booking Date :</div><div className='cont-wrapper'>01-05-2023</div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div className='label-wrapper fw-500'>Date of request :</div><div className='cont-wrapper'>01-05-2023</div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div className='label-wrapper fw-500'>Payment Status :</div><div className='cont-wrapper'>Un Paid</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default ViewBooking
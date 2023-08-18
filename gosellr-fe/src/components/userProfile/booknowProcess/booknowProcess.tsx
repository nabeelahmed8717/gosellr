import React, { useState } from 'react'
import "./booknowProcess.scss"
import { Button, Col, Form, Input, Modal, Row, Select, Space, TimePicker } from 'antd'

import locationIcon from "../../../assets/icons/location.svg"


const BooknowProcess = ({ isBookNowModalOpen, setIsBookNowModalOpen }: any) => {
    const [isBookingTypeVirtual, setIsBookingTypeVirtual] = useState(false)

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleChange = (value: string) => {
        if (value === "virtual") {
            setIsBookingTypeVirtual(true)
        } else {
            setIsBookingTypeVirtual(false)
        }
    };

    return (
        <Modal title="Book Now" open={isBookNowModalOpen} footer={false} onOk={() => setIsBookNowModalOpen(false)} onCancel={() => setIsBookNowModalOpen(false)}>
            <div className="book-now-from">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                    layout="vertical">
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Your Name"
                                name="name"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="your address"
                                name="name"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <div className='group-address'>
                                    <Input placeholder="Select your location" style={{ width: '87%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                    <Button><img width={20} height={20} src={locationIcon} alt="" /></Button>
                                </div>
                            </Form.Item>
                        </Col>
                        

                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Select Time"
                                name="time"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <TimePicker.RangePicker format="HH:mm A" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Select Booking type"
                                name="bookingType"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Select
                                    placeholder="Select type"
                                    style={{ width: "100%" }}
                                    onChange={handleChange}
                                    options={[
                                        { value: 'virtual', label: 'Virtual' },
                                        { value: 'physical', label: 'Physical' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>

                        {isBookingTypeVirtual &&
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Virtual meeting Software Name"
                                    name="meetingSoftware"
                                    rules={[{ required: true, message: 'Required field' }]}
                                >
                                    <Input placeholder="Type here (e.g zoom, meet, etc)" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                </Form.Item>
                            </Col>
                        }





                        <div className="d-flex flex-column" style={{ gap: "15px", width: "100%", marginTop: "20px" }}>
                            <Button htmlType='submit' className='book-now-btn'>Book Now</Button>
                        </div>
                    </Row>
                </Form>
            </div>
        </Modal>
    )
}

export default BooknowProcess
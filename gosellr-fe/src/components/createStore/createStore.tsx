import React from 'react'
import './createStore.scss'
import { Button, Col, Form, Input, Radio, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const CreateStore = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='create-store-main'>
            <div className="form-header">
                <h3>Create Gosellr Store</h3>
                <p>Register your business</p>
            </div>
            <div className="create-store-from">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    rootClassName='create-store-form-wrapper'
                    // autoComplete="off"
                    layout="vertical">
                    <Row gutter={[20, 0]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Store Title"
                                name="storeTitle"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Store Description"
                                name="storeDescription"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <TextArea rows={2} placeholder="Type here" style={{ width: '100%', backgroundColor: "#FCFBFF" }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Select store type"
                                name="storeType"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Radio.Group >
                                    <Radio value={1}>Physical</Radio>
                                    <Radio value={2}>Virtual</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Select your role in this business"
                                name="roleType"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Radio.Group >
                                    <Radio value={1}>Owner</Radio>
                                    <Radio value={2}>Manager</Radio>
                                    <Radio value={3}>Employee</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Select dashboard type"
                                name="dashboardType"
                                rules={[{ required: true, message: 'Required field' }]}
                            >
                                <Radio.Group >
                                    <Radio value={10}>Selling Dashboard</Radio>
                                    <Radio value={20}>Company Dashboard</Radio>
                                    <Radio value={30}>Dealer's Dashboard</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <br />
                        <Col>
                            <Button htmlType='submit' className='submit-btn'>Submit</Button>
                        </Col>

                    </Row>

                </Form>
            </div>
        </div>
    )
}

export default CreateStore
import React from 'react'
import "../authentication.scss"
import { Button, Col, Form, Input, Row } from 'antd'
import authOverlay from '../../../assets/wrapper/overlay-auth.svg'
import brandLogo from '../../../assets/brandAssets/brand-logo-fr-white.svg'
import googleIcon from '../../../assets/icons/google.svg'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='auth-main-wrapper'>
            <Row>
                <Col lg={12} xl={12}>
                    <div className="side-wrapper">
                        <div className="inner-wrap">
                            <img className="brand-logo" src={brandLogo} alt="" />
                            <div className="content">
                                <h3>Sign in and unlock a world of local services .</h3>
                            </div>
                            <img className='overlay-auth' src={authOverlay} alt="" />
                        </div>
                    </div>
                </Col>
                <Col lg={12} xl={12}>
                    <div className="wrapper-auth">
                        <h2 className='fs-32 fw-700' style={{ marginBottom: '30px' }}>Sign in</h2>
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
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: 'Required field' }]}
                                    >
                                        <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Required field' }]}
                                    >
                                        <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                    </Form.Item>
                                </Col>

                                <div className="d-flex flex-column" style={{ gap: "15px", width: "100%", marginTop: "20px" }}>
                                    <Button htmlType='submit' className='sign-in-button'>Sign In</Button>
                                    <Button htmlType='button' className='sign-in-button-google'> <img src={googleIcon} width={15} height={15} alt="" /> Sign In with google</Button>
                                    <p className='end-navigator text-center'>Doesn't have an account <span onClick={() => navigate('/sign-up')} >Sign up</span></p>
                                </div>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SignIn
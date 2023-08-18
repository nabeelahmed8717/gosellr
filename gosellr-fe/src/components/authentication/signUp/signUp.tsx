import React, { useState } from 'react'
import "../authentication.scss"
import { Button, Checkbox, Col, Form, Input, Modal, Row, Select, Steps } from 'antd'
import authOverlay from '../../../assets/wrapper/overlay-auth.svg'
import brandLogo from '../../../assets/brandAssets/brand-logo-fr-white.svg'
import googleIcon from '../../../assets/icons/google.svg'
import faceVectorReg from '../../../assets/wrapper/face-vec-reg.png'
import infoIcon from '../../../assets/icons/info-green.svg'


import { useNavigate } from 'react-router-dom'
import { countryOptions } from '../../../mock/listCountries'

const { Option } = Select;
const { Step } = Steps;

const SignUp = () => {

    const navigate = useNavigate()
    const [isSkipFacialVerification, setIsSkipFacialVerification] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false);


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleCountryChange = (value: string) => {
    };



    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    console.log("currentStep", currentStep)


    return (
        <div className='auth-main-wrapper'>
            <Row>
                <Col lg={12} xl={12}>
                    <div className="side-wrapper">
                        <div className="inner-wrap">
                            <img className="brand-logo" src={brandLogo} alt="" />
                            <div className="content">
                                <h3>Join Quiklers and discover a new way to access services .</h3>
                            </div>
                            <img className='overlay-auth' src={authOverlay} alt="" />
                        </div>
                    </div>
                </Col>
                <Col lg={12} xl={12}>
                    <div className="wrapper-auth">
                        <h2 className='fs-32 fw-700' style={{ marginBottom: '30px' }}>Sign Up</h2>

                        <Steps current={currentStep} style={{ marginBottom: "40px" }}>
                            <Step title="Step 1" description="Personal Information" />
                            <Step title="Step 2" description="Verification" />
                            <Step title="Step 3" description="Finalization" />
                        </Steps>

                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            // autoComplete="off"
                            layout="vertical">
                            <Row gutter={[20, 0]}>
                                {
                                    currentStep === 0 &&
                                    <>
                                        <Col xs={24} sm={24} md={24} lg={12}>
                                            <Form.Item
                                                label="First Name"
                                                name="firstName"
                                                rules={[{ required: true, message: 'Required field' }]}
                                            >
                                                <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={12}>
                                            <Form.Item
                                                label="Last Name"
                                                name="lastName"
                                                rules={[{ required: true, message: 'Required field' }]}
                                            >
                                                <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                            </Form.Item>
                                        </Col>
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
                                                label="Select Country"
                                                name="country"
                                                rules={[{ required: true, message: 'Required field' }]}
                                            >
                                                <Select
                                                    showSearch
                                                    placeholder="Select a country"
                                                >
                                                    {countryOptions.map((option) => (
                                                        <Option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </>
                                }

                                {
                                    currentStep === 1 &&
                                    <>
                                        <div className='face-reg-wrapper'>
                                            <h2>Face Verification</h2>
                                            <p style={{ marginBottom: '20px' }}>Click "Start Face Verification" to do a face verification</p>
                                            <div className="d-flex align-center flex-wrapper">
                                                <img src={faceVectorReg} width={200} alt="" />
                                                <Button htmlType='button' className='face-ver-button'>Start Face Verification</Button>
                                            </div>

                                            <Checkbox onClick={() => setIsModalOpen(true)} style={{ marginTop: '20px' }} checked={isSkipFacialVerification}>Skip this for now</Checkbox>

                                        </div>
                                    </>
                                }

                                {
                                    currentStep === 2 &&
                                    <>
                                        <div className="passwords-wrapper">
                                            <div style={{ width: '96.5%', margin: '0 auto', marginBottom: '25px' }}>
                                                <h2>Great!</h2>
                                                <p>Now setup your password</p>
                                            </div>

                                            <Col xs={24} sm={24} md={24} lg={24}>
                                                <Form.Item
                                                    label="Create Password"
                                                    name="cPassword"
                                                    rules={[{ required: true, message: 'Required field' }]}
                                                >
                                                    <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={24} lg={24}>
                                                <Form.Item
                                                    label="Confirm Password"
                                                    name="password"
                                                    rules={[{ required: true, message: 'Required field' }]}
                                                >
                                                    <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                                </Form.Item>
                                            </Col>

                                        </div>
                                    </>
                                }


                                <div className="d-flex flex-column" style={{ gap: "15px", width: "100%", marginTop: "20px" }}>
                                    <div className="d-flex" style={{ gap: '10px' }}>
                                        {currentStep > 0 && (
                                            <Button htmlType='button' className='sign-in-button-ex button-dull' onClick={handlePrev}>Previous</Button>
                                        )}
                                        {currentStep < 2 && (
                                            <Button htmlType='button' className='sign-in-button-ex' onClick={handleNext}>Next</Button>
                                        )}
                                        {currentStep === 2 && <Button htmlType='submit' className='sign-in-button'>Finish & Sign Up</Button>}
                                    </div>


                                    <p className='end-navigator'>Already have an account <span onClick={() => navigate('/sign-in')}>Sign in</span></p>
                                </div>


                                <Modal centered title="" open={isModalOpen} okText='Skip this for now' onOk={() => { setIsModalOpen(false); setIsSkipFacialVerification(true) }} onCancel={() => { setIsModalOpen(false); setIsSkipFacialVerification(false) }}>
                                    <div className="d-flex flex-column align-center">
                                    <img src={infoIcon} width={40} height={40} alt="" />
                                    <h2 style={{marginTop:"20px"}}>Are you sure ?</h2>
                                    <p style={{marginBottom:"20px", width:'80%', textAlign:'center'}}>By skipping face verification you were unable to sell or buy conditional services</p>
                                    </div>
                                   
                                </Modal>


                            </Row>
                        </Form>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SignUp
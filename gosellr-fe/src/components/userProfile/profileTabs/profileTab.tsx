import React from 'react'
import "./profileTabs.scss"
import { Button, Col, Row, Timeline } from 'antd'

const ProfileTab = () => {

  const educationTimeLine = [
    {
      children: (
        <div>
          <h4>University of ABC</h4>
          <ul>
            <li>Degree: Bachelor of Science in Business Administration</li>
            <li>Major: Marketing</li>
            <li>Graduation Year: 2015</li>
          </ul>
        </div>
      ),
    },
    {
      children: (
        <div>
          <h4>XYZ Institute of Technology</h4>
          <ul>
            <li>Certification: Project Management Professional (PMP)</li>
            <li>Certification Year: 2016</li>
          </ul>
        </div>
      ),
    },
    {
      children: (
         <div>
          <h4>Community College of XYZ</h4>
          <ul>
            <li>Course: Web Development Fundamentals</li>
            <li>Completion Year: 2017</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <div className='wrapper-profile-tab'>
      <div className="service-label"><p>Consultant</p></div>
      <Row gutter={[20, 20]}>
        <Col sm={24} md={24} lg={16} xxl={16} >
          <div className="bx-low-bx-cont" style={{ height: '100%' }}>
            <h4 className='fs-16 fw-500 label-color'>About</h4>
            <p className='fs-14'>
              Meet John Doe, your dedicated expert consultant at Quiklers Service Provider Application. With 10 years of experience in Consultant, I'm committed to helping you achieve your goals. Let's collaborate and create a tailored roadmap for your success, whether it's in strategic planning, personal development, or optimizing your business. Together, we'll unlock your full potential and thrive in online consultant. Let's get started!
            </p>
          </div>
        </Col>
        <Col sm={24} md={24} lg={8}>
          <div className="bx-low-bx-cont low-bx-cont-mb ">
            <h4 className='fs-16 fw-500 label-color'>Main Language</h4>
            <p className='fs-14'>
              English
            </p>
          </div>
          <div className="bx-low-bx-cont">
            <h4 className='fs-16 fw-500 label-color'>Address &nbsp; <Button className='view-in-maps-btn'>view in maps</Button></h4>
            <p className='fs-14'>
              Apt 203, 4578 Maple Lane, California, United States
            </p>
          </div>
        </Col>
        <Col sm={24} md={24} lg={16} xxl={16} >
          <div className="bx-low-bx-cont" style={{ height: '100%' }}>
            <h4 className='fs-16 fw-500 label-color'>Education</h4>
            <Timeline
            style={{marginTop:"10px"}}
              items={educationTimeLine}
            />
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default ProfileTab
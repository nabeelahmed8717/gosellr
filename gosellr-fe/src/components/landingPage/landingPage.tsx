import React from 'react'
import "./landingPage.scss"
import { Button, Col, Row } from 'antd'

import bgWrapper from '../../assets/wrapper/bg-landing.svg'
import { servicesData } from '../../mock/services'
import hamburger from "../../assets/icons/menu-burger.svg"
import bolt from "../../assets/icons/bolt-outlined.svg"
import users from "../../assets/icons/users.svg"


import arrowDown from "../../assets/icons/arrow-down-small.svg"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className='wrapper-main-landing-page'>
      <div className="category-open-bar-wrapper">
        <div className="section-one">
          <Button className='d-btn hamburger-btn fs-14'><img src={hamburger} width={15} height={15} alt="" />Shop By Category</Button>
          <div className="outh-category">
            <p><img src={bolt} width={12} height={12} alt="" />Deals Today</p>
          </div>
        </div>
        <Button className='d-btn affilate-btn'><img src={users} width={12} height={12} alt="" />Affilate Program</Button>
      </div>
      <div style={{ backgroundColor: "#F7F7F7", width: "100%", height: "200px", marginTop: "20vh" }}></div>
    </div>
  )
}

export default LandingPage
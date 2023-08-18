import React from 'react'
import "./landingPage.scss"
import { Button, Col, Row } from 'antd'

import bgWrapper from '../../assets/wrapper/bg-landing.svg'
import { servicesData } from '../../mock/services'


import arrowDown from "../../assets/icons/arrow-down-small.svg"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className='wrapper-main-landing-page'>
      <div style={{backgroundColor:"#F7F7F7", width:"100%", height:"200px", marginTop:"20vh"}}></div>
    </div>
  )
}

export default LandingPage
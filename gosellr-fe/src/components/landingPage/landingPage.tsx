import React, { useEffect, useRef, useState } from 'react'
import "./landingPage.scss"
import { Button, Carousel, Col, Row } from 'antd'
import hamburger from "../../assets/icons/menu-burger.svg"
import bolt from "../../assets/icons/bolt-outlined.svg"
import users from "../../assets/icons/users.svg"
import adverOne from "../../assets/raw/adverOne.png"
import adverTwo from "../../assets/raw/adverTwo.png"
import adverRight from "../../assets/raw/adverRight.png"



import arrowDown from "../../assets/icons/arrow-down-small.svg"
import { useNavigate } from 'react-router-dom'
import { lowerCategories } from '../../mock/lowerCategories'




const LandingPage = () => {
  const navigate = useNavigate()


  const cardContainerRef: any = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = (scrollOffset:any) => {
    if (cardContainerRef.current) {
      const targetScrollLeft = cardContainerRef.current.scrollLeft + scrollOffset;
      smoothScrollTo(targetScrollLeft, 300); // Smoothly scroll to the target position
    }
  };

  const smoothScrollTo = (target:any, duration:any) => {
    const start = cardContainerRef.current.scrollLeft;
    const startTime = performance.now();
    
    const animateScroll = (timestamp:any) => {
      const currentTime = timestamp - startTime;
      const scrollProgress = Math.min(currentTime / duration, 1);
      const scrollPosition = start + (target - start) * scrollProgress;
      cardContainerRef.current.scrollLeft = scrollPosition;

      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleViewportChange(event: any) {
        setIsMobile(event.matches);
    }
    handleViewportChange(mediaQuery);
    mediaQuery.addListener(handleViewportChange);
    return () => {
        mediaQuery.removeListener(handleViewportChange);
    };
}, []);


  return (
    <div className='wrapper-main-landing-page'>
      <div className="category-open-bar-wrapper">
        <div className="section-one">
          <Button className='d-btn hamburger-btn fs-14'><img src={hamburger} width={15} height={15} alt="" />Shop By Category</Button>
          <div className="outh-category">
            <p><img src={bolt} width={12} height={12} alt="" />Deals Today</p>
          </div>
        </div>
        {
          !isMobile && 
          <Button className='d-btn affilate-btn'><img src={users} width={12} height={12} alt="" />Affilate Program</Button>
        }
        
      </div>
      <div className="wrapper-adds-bar">
        <div className="inner-wrapper-ads">
          <Row gutter={[20, 20]}>
            <Col sm={24} md={16} lg={16}>
              <Carousel autoplay>
                <div>
                  <img src={adverOne} className='img-ads' alt="" />
                </div>
                <div>
                  <img src={adverTwo} className='img-ads' alt="" />
                </div>
                <div>
                  <img src={adverOne} className='img-ads' alt="" />
                </div>
                <div>
                  <img src={adverOne} className='img-ads' alt="" />
                </div>
              </Carousel>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className='adver-right'>
                <img src={adverRight} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="visual-category set-width-85">
        <div className='header-category'><h3>Browse by Category</h3><p>All Categories <img src={arrowDown} width={15} height={15} alt="" /></p></div>

        <div className="card-scroll-component">
          <div className="flex-cards-container" ref={cardContainerRef}>
            <div className="flex-cards-wrapper">
              {lowerCategories.map((item, index) => (
                <div className="single-category-card" key={index}>
                  <img src={item.icon} width={40} height={40} alt="" />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-buttons">
            <Button className='d-btn left-btn' onClick={() => handleScroll(-100)}><img src={arrowDown} alt="" /></Button>
            <Button className='d-btn right-btn' onClick={() => handleScroll(100)}><img src={arrowDown} alt="" /></Button>
          </div>
        </div>

      </div>

      <div style={{ backgroundColor: "#F7F7F7", width: "100%", height: "200px", marginTop: "20vh" }}></div>
    </div>
  )
}

export default LandingPage
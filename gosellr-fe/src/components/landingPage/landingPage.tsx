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
import ProductCard from '../../shared/productCard/productCard'
import { dummyProducts } from '../../mock/dummyProducts'
import Cascader from './cascader'




const LandingPage = () => {
  const navigate = useNavigate()


  const cardContainerRef: any = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const [isHamburderActive, setIsHamburderActive] = useState(false)

  const handleScroll = (scrollOffset: any) => {
    if (cardContainerRef.current) {
      const targetScrollLeft = cardContainerRef.current.scrollLeft + scrollOffset;
      smoothScrollTo(targetScrollLeft, 300); // Smoothly scroll to the target position
    }
  };

  const smoothScrollTo = (target: any, duration: any) => {
    const start = cardContainerRef.current.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (timestamp: any) => {
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
          <Button className='d-btn hamburger-btn fs-14' onClick={() => setIsHamburderActive(!isHamburderActive)}><img src={hamburger} width={15} height={15} alt="" />Shop By Category</Button>
          <div className="outh-category">
            <p><img src={bolt} width={12} height={12} alt="" />Deals Today</p>
          </div>
        </div>
        {
          !isMobile &&
          <Button className='d-btn affilate-btn'><img src={users} width={12} height={12} alt="" />Affilate Program</Button>
        }
        {isHamburderActive && <Cascader isHamburderActive={isHamburderActive} />}
      </div>



      <div className="wrapper-adds-bar">
        <div className="inner-wrapper-ads">
          <Row gutter={[20, 20]}>
            <Col sm={24} md={16} lg={16}>
              <Carousel autoplay>
                <div>
                  <img src="https://img.freepik.com/premium-vector/delicious-tortilla-chips-banner-with-flying-cheese-cookies_317442-577.jpg?w=1380" className='img-ads' alt="" />
                </div>
                <div>
                  <img src="https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336701.jpg?w=996&t=st=1692716024~exp=1692716624~hmac=5f38ccdd988c707829a66a59b3e3b647124c75ee1a6f4b8bc7524c8d3073520a" className='img-ads' alt="" />
                </div>
                <div>
                  <img src={"https://elements-cover-images-0.imgix.net/594df528-54d5-4b18-ac9f-440dddb4c530?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=166e4dd4839a054c862542ef79075346"} className='img-ads' alt="" />
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

      <div className="main-products-container set-width-85">
        <div className='head-products'><h3>Individual Products <span>Just Landing</span></h3></div>
        <div className="wrapper-product-display product-container">
          {
            dummyProducts.map((item: any) => (
              <ProductCard productData={item} />
            ))
          }

        </div>
      </div>



      <div style={{ backgroundColor: "#F7F7F7", width: "100%", height: "200px", marginTop: "20vh" }}></div>
    </div>
  )
}

export default LandingPage
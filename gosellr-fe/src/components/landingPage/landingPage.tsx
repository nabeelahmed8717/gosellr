import React, { useEffect, useRef, useState } from 'react'
import "./landingPage.scss"
import { Button, Carousel, Col, Input, Row } from 'antd'
import hamburger from "../../assets/icons/menu-burger.svg"
import bolt from "../../assets/icons/bolt-outlined.svg"
import users from "../../assets/icons/users.svg"
import adverOne from "../../assets/raw/adverOne.png"
import adverTwo from "../../assets/raw/adverTwo.png"
import adverRight from "../../assets/raw/adverRight.png"
import searchIcon from "../../assets/icons/fi-rs-search.svg"

import brandLogoW from "../../assets/brandAssets/brand-logo-fr-white.svg"


import arrowDown from "../../assets/icons/arrow-down-small.svg"
import groupedImg from "../../assets/wrapper/e-com-grp-dull.svg"
import groupedImgRes from "../../assets/wrapper/e-com-grp-dull-res.svg"
import { useNavigate } from 'react-router-dom'
import { lowerCategories } from '../../mock/lowerCategories'
import ProductCard from '../../shared/productCard/productCard'
import { dummyProducts } from '../../mock/dummyProducts'
import Cascader from './cascader'
import AdvanceSearch from '../../shared/advanceSearch/advanceSearch'




const LandingPage = () => {
  const navigate = useNavigate()


  const cardContainerRef: any = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const [isHamburderActive, setIsHamburderActive] = useState(false)

  const [isAdvanceSearch, setIsAdvanceSearch] = useState(false);
  const [searchQuery, setsearchQuery] = useState()

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
    <>

      <div className='wrapper-main-landing-page'>
        <div className="grouped-products">
          {/* <img src={isMobile ? groupedImgRes : groupedImg} alt="" /> */}
          <div className="grouped-inner">
            <div className='head-grp'>
              <h3>Simplify Your E-commerce Shopping with Grouped Products</h3>
              <p>Choose best and verified products on one click</p>
            </div>
            <Button onClick={() => navigate('../grouped-products')}>View now</Button>
          </div>
        </div>
        {/* <div className="advance-search">
          <Input type='search' value={searchQuery} className='input-adv-search' placeholder='Search in Gosellr...' onClick={() => setIsAdvanceSearch(true)} suffix={<img src={searchIcon} alt="" width={20} height={20} />} />
        </div> */}
        <div className="category-open-bar-wrapper">
          <div className="section-one">

            <div className='menu-opener-hover-able'>
              <Button className='d-btn hamburger-btn fs-14' ><img src={hamburger} width={15} height={15} alt="" />Shop By Category</Button>
              <div className='menu-main'>
                <Cascader isHamburderActive={isHamburderActive} setIsHamburderActive={setIsHamburderActive} />
              </div>
            </div>


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
                    <img src="https://img.freepik.com/premium-vector/delicious-tortilla-chips-banner-with-flying-cheese-cookies_317442-577.jpg?w=1380" className='img-ads' loading='lazy' alt="" />
                  </div>
                  <div>
                    <img src="https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336701.jpg?w=996&t=st=1692716024~exp=1692716624~hmac=5f38ccdd988c707829a66a59b3e3b647124c75ee1a6f4b8bc7524c8d3073520a" className='img-ads' loading='lazy' alt="" />
                  </div>
                  <div>
                    <img src={"https://elements-cover-images-0.imgix.net/594df528-54d5-4b18-ac9f-440dddb4c530?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=166e4dd4839a054c862542ef79075346"} className='img-ads' loading='lazy' alt="" />
                  </div>
                </Carousel>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div className='adver-right'>
                  <img src={adverRight} alt="" loading='lazy' />
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
                    <img src={item.icon} width={40} height={40} alt="" loading='lazy' />
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



        <div style={{ backgroundColor: "#F7F7F7", width: "100%", padding: "50px 80px", marginTop: "20vh" }}>

          <Row>
            <Col xs={24} sm={24} md={6} lg={9}>
              <div>
                <img src={brandLogoW} width={100} alt="" />
                <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                  <p>Contact</p>
                  <p>5534 Somewhere In. The World 22193-10212</p>
                </div>

              </div>
            </Col>
            <Col xs={24} sm={24} md={6} lg={5}>
              <div>
                <h3 style={{ fontWeight: "500", marginBottom:"20px" }}>Useful links</h3>
                <div style={{textTransform:"capitalize", display:"flex", flexDirection:"column", gap:"5px"}}>
                  <p className='fs-14'>about us</p>
                  <p className='fs-14'>contact</p>
                  <p className='fs-14'>help</p>
                  <p className='fs-14'>career</p>
                  <p className='fs-14'>policy</p>
                  <p className='fs-14'>flash sale</p>
                  <p className='fs-14'>site map</p>
                  <p className='fs-14'>ehb products</p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={6} lg={5}>
            <div>
                <h3 style={{ fontWeight: "500", marginBottom:"20px" }}>Help Center</h3>
                <div style={{textTransform:"capitalize", display:"flex", flexDirection:"column", gap:"5px"}}>
                  <p className='fs-14'>payments</p>
                  <p className='fs-14'>shipping</p>
                  <p className='fs-14'>quick products</p>
                  <p className='fs-14'>refund policy</p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={6} lg={5}>
            <div>
                <h3 style={{ fontWeight: "500", marginBottom:"20px" }}>Gosellr Business</h3>
                <div style={{textTransform:"capitalize", display:"flex", flexDirection:"column", gap:"5px"}}>
                  <p className='fs-14'>sel on gosellr</p>
                  <p className='fs-14'>affiliate program </p>
                  <p className='fs-14'>suppliers</p>
                  <p className='fs-14'>product verification</p>
                  <p className='fs-14'>companies</p>
                </div>
              </div>
            </Col>
          </Row>

        </div>
      </div>

      <AdvanceSearch isAdvanceSearch={isAdvanceSearch} setIsAdvanceSearch={setIsAdvanceSearch} setGetSearchQuery={setsearchQuery} />
    </>

  )
}

export default LandingPage
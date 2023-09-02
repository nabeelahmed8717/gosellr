import React, { useEffect, useRef, useState } from 'react'
import "./viewProduct.scss"
import { Button, Carousel, Col, Progress, Rate, Row } from 'antd'
import arrowDown from "../../../assets/icons/arrow-down-small.svg"
import shippingIcon from "../../../assets/icons/shipping.svg"
import ProductRatings from './productRatings/productRatings'


const productImages = [
    {
        id: "1",
        imageUrl: "https://static-01.daraz.pk/p/2a4e8c88b9ded9b8a1d508fd54ac9ead.jpg"
    },
    {
        id: "2",
        imageUrl: "https://static-01.daraz.pk/p/93b878abfcd2a81f4dea7337698df451.jpg_750x750.jpg_.webp"
    },
    {
        id: "3",
        imageUrl: "https://m.media-amazon.com/images/I/71NLiCmzlhL.jpg"
    },
    {
        id: "4",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4mTiinchzd3QpdxPO87yciRyAlNFqQpyhzcR3bQRtNWQOafbDM48kB8i2TQGEstSuJ4&usqp=CAU"
    },
    {
        id: "5",
        imageUrl: "https://down-ph.img.susercontent.com/file/888f2e840c359a0dd24ccc55467fcf7b"
    },
]

const product_details = [
    "Wireless Bluetooth 5.0 connection",
    "Over-ear design with soft earcups",
    "Foldable for easy portability",
    "Built-in microphone for hands-free calling",
    "FM radio function",
    "Bass boost",
    "3.5mm audio jack",
    "Up to 15 hours of battery life",
    "Lightweight and comfortable to wear",
    "Stylish and modern design",
    "Supports HSP, HFP, A2DP, and AVRCP profiles",
    "Frequency range: 2.4026 GHz-2.480 GHz",
    "Sensitivity: 105dB+ / - 3dB",
    "Impedance: 32ohm",
    "Battery capacity: 300mAh",
    "Charging time: 2-3 hours"
]

const ViewProduct = () => {

    const [isMobile, setIsMobile] = useState(false);

    const scrollContainerRef = useRef<any>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [imageViewerUrl, setImageViewerUrl] = useState(productImages[0])

    const colorVariants = ['#2980b9', '#2ecc71', '#8e44ad'];
    // const sizeVariants = ['XS', 'SM', 'MD', 'LG'];

    const [selectedColor, setSelectedColor] = useState('');

    const handleColorSelection = (color: any) => {
        setSelectedColor(color);
    };

    const handleScroll = (scrollOffset: any) => {
        if (scrollContainerRef.current) {
            const newScrollPosition = scrollPosition + scrollOffset;
            setScrollPosition(newScrollPosition);
            scrollContainerRef.current.scrollLeft = newScrollPosition;
        }
    };

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
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
        <div className='view-product-main-wrapper'>
            <Row gutter={[20, 20]} style={{ margin: "0px" }}>
                <Col sm={24} md={24} lg={7} className='wrapper-coursel-config'>
                    {
                        !isMobile ?
                            <div className="image-viewer-flex-cards-wrapper">
                                <div className="image-viewer-container">
                                    <img src={imageViewerUrl?.imageUrl} alt="" />
                                </div>
                                <div className="image-scroll-view">
                                    <Button className="scroll-button d-btn left-btn" onClick={() => handleScroll(-100)}>
                                        <img src={arrowDown} alt="" />
                                    </Button>
                                    <div className="flex-image-container" ref={scrollContainerRef}>
                                        {productImages.map((imageUrl: any, index: any) => (
                                            <div className="box-image" key={index} onClick={() => setImageViewerUrl(imageUrl)}>
                                                <img src={imageUrl.imageUrl} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="scroll-button d-btn right-btn" onClick={() => handleScroll(100)}>
                                        <img src={arrowDown} alt="" />
                                    </Button>
                                </div>
                            </div>
                            :
                            <div className="coursel-mobile">
                                <Carousel afterChange={onChange} className='coursel-inner'>
                                    {
                                        productImages.map((item: any) => (
                                            <div >
                                                <div className='coursel-inner'>
                                                    <img src={item.imageUrl} alt="" />
                                                </div>
                                            </div>
                                        ))}

                                </Carousel>
                            </div>
                    }
                </Col>
                <Col sm={24} md={24} lg={12}>
                    <div className="product-details-main">
                        <div className="product-main-label">
                            P47 Black Wireless Bluetooth Headphones Over Ear Foldable Headset for Music Calling Talking FM Ratio Pubg Gaming with Mic Microphone Stereo Bass 3.5mm
                        </div>

                        <div className="flex-rev-bv">
                            <div className="main-tags">
                                <div className="tsg-tag tag-free-shipping ">
                                    <img src={shippingIcon} width={15} height={15} alt="" />
                                    <span>Free Shipping</span>
                                </div>
                            </div>
                            <div className="verifications">
                                <h5>Verifications</h5>
                                <div className="badges-dept">
                                    <div className='badge badge-edr'><span>EDR</span></div>
                                    <div className='badge badge-pss'><span>PSS</span></div>

                                </div>
                            </div>
                        </div>

                        <div className="ratings">
                            <Rate className="product-rating" disabled defaultValue={3.5} />
                            <p><span>367</span> Ratings</p>
                        </div>

                        <div className="price-tags">
                            <span>$</span><p>50</p>
                        </div>

                        <div className="color-qur">
                            <h5>Color varients (4)</h5>
                            <div className='flex-buttons'>
                                {colorVariants.map((color) => (
                                    <Button
                                        className={`${selectedColor === color ? "highlited-color" : ""}`}
                                        key={color}
                                        onClick={() => handleColorSelection(color)}
                                    >
                                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: color }}></div>
                                    </Button>
                                ))}
                            </div>
                        </div>

                    </div>
                </Col>
                <Col sm={24} md={24} lg={5}></Col>
            </Row>

            <div className="section-two">
                <div className="about-product">
                    <h4>Product Details</h4>
                    <Row>
                        {
                            product_details.map((item) => (
                                <Col className='product-disp-s' xs={24} sm={24} md={24} lg={12}>{item}</Col>
                            ))
                        }
                    </Row>
                </div>

                <div className="ratings-product">
                    <h4>Product Ratings and Reviews</h4>
                    <div className="ratings-wrapper-ov">
                        <Row>
                            <Col sm={24} md={6} lg={6}>
                                <div className="box-ov-rating">
                                    <div className='flex-rat'>
                                        <p>4.2<span>/5</span></p>
                                        <Rate className="product-rating" disabled defaultValue={3.5} />
                                        <h6>128 Ratings</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={18} lg={18}>
                                <div className="bars-ratings">
                                    <div className="rat-bar-num">
                                        <Rate className="product-rating" disabled defaultValue={5} />
                                        <Progress className='rat-progress' style={{ width: "160px" }} showInfo={false} percent={60} />
                                        <p>90</p>
                                    </div>
                                    <div className="rat-bar-num">
                                        <Rate className="product-rating" disabled defaultValue={4} />
                                        <Progress className='rat-progress' style={{ width: "160px" }} showInfo={false} percent={20} />
                                        <p>6</p>
                                    </div>
                                    <div className="rat-bar-num">
                                        <Rate className="product-rating" disabled defaultValue={3} />
                                        <Progress className='rat-progress' style={{ width: "160px" }} showInfo={false} percent={25} />
                                        <p>7</p>
                                    </div>
                                    <div className="rat-bar-num">
                                        <Rate className="product-rating" disabled defaultValue={2} />
                                        <Progress className='rat-progress' style={{ width: "160px" }} showInfo={false} percent={2} />
                                        <p>5</p>
                                    </div>
                                    <div className="rat-bar-num">
                                        <Rate className="product-rating" disabled defaultValue={1} />
                                        <Progress className='rat-progress' style={{ width: "160px" }} showInfo={false} percent={30} />
                                        <p>20</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </div>

                    <div className="user-review-wrapper">
                        <ProductRatings/>
                        <ProductRatings/>
                        <ProductRatings/>
                        <ProductRatings/>
                    </div>
                </div>
            </div>


            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default ViewProduct
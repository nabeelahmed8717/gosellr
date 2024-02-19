import React, { useEffect, useRef, useState } from 'react'
import "./viewProduct.scss"
import { Button, Carousel, Col, FloatButton, Image, Progress, Rate, Row } from 'antd'
import shippingIcon from "../../../assets/icons/shipping.svg"
import ProductRatings from './productRatings/productRatings'

import arrowDown from "../../../assets/icons/arrow-down-small.svg"
import arrowBack from "../../../assets/icons/angle-left.svg"
import plusIcon from "../../../assets/icons/plus-small.svg"
import minusIcon from "../../../assets/icons/minus-small.svg"
import cartIcon from "../../../assets/icons/shopping-cart-add.svg"
import { useLocation } from 'react-router-dom'
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import storeIcon from "../../../assets/raw/store-icon.png"

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

    const location = useLocation();

    const [isMobile, setIsMobile] = useState(false);

    const [fullLoad, setFullLoad] = useState(true);

    const scrollContainerRef = useRef<any>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [imageViewerUrl, setImageViewerUrl] = useState<any>(productImages[0])










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



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFullLoad(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className='view-product-main-wrapper'>

            {
                isMobile && fullLoad ?
                    <div className="loading-product">
                        <p>Loading...</p>
                    </div>
                    :
                    <>
                        <Row gutter={[20, 20]} style={{ margin: "0px" }}>
                            <Col sm={24} md={24} lg={14} className='wrapper-coursel-config'>

                                <div className='coursel-wrapper-container'>
                                    <div className="flex-capture-container">
                                        {
                                            productImages.map((item: any) => (
                                                <div className="image-box" onMouseOver={() => setImageViewerUrl(item)}>
                                                    <img src={item?.imageUrl} alt="" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='display-wrapper'>
                                        <Image src={imageViewerUrl?.imageUrl} alt="" />
                                    </div>


                                </div>

                                { isMobile && <SideBarDetails />}

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
                                            <ProductRatings />
                                            <ProductRatings />
                                            <ProductRatings />
                                            <ProductRatings />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {!isMobile && <Col sm={24} md={24} lg={10}>
                                <SideBarDetails />
                            </Col>}

                        </Row>


                        <FloatButton style={{ marginBottom: "50px" }} icon={<CommentOutlined />} />

                        <br />
                        <br />
                        <br />
                        <br />
                    </>
            }
        </div>
    )
}

const SideBarDetails = () => {

    const colorVariants = ['#2980b9', '#2ecc71', '#8e44ad'];
    // const sizeVariants = ['XS', 'SM', 'MD', 'LG'];

    const [selectedColor, setSelectedColor] = useState('');


    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const handleColorSelection = (color: any) => {
        setSelectedColor(color);
    };



    return (
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
                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: color }}></div>
                        </Button>
                    ))}
                </div>
            </div>

            <div className='wrapper-flex-r5e'>
                <div className="wrapper-quantity-selector">
                    <h5>Quantity</h5>
                    <div className="quantity-selector">
                        <Button className='left-btn ' onClick={handleDecrement}><img src={minusIcon} alt="" /></Button>
                        <span>{quantity}</span>
                        <Button className='right-btn' onClick={handleIncrement}><img src={plusIcon} alt="" /></Button>
                    </div>
                </div>



            </div>
            <Button type='primary'
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: '10px', marginTop: "20px", width: "60%", height: "45px", borderRadius: "30px" }}
            ><img src={cartIcon} style={{ filter: "invert(1) brightness(1.5)" }} width={20} height={20} alt="" />Add to cart</Button>

            <div className="store-and-essentials">
                <div className="store-details">
                    <p className='label'>Store Information</p>
                    <div className="store-info">
                        <div className='store-img'>
                            <img src={storeIcon} alt="" />
                        </div>
                        <div>
                            <h3>Example Store</h3>
                            <p style={{ fontSize: "12px", color: "#2980b9", cursor: "pointer" }}>View more products from this store</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewProduct
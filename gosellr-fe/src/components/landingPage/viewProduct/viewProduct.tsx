import React, { useEffect, useRef, useState } from 'react'
import "./viewProduct.scss"
import { Button, Carousel, Col, Rate, Row } from 'antd'
import arrowDown from "../../../assets/icons/arrow-down-small.svg"
import shippingIcon from "../../../assets/icons/shipping.svg"


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

const ViewProduct = () => {

    const [isMobile, setIsMobile] = useState(false);

    const scrollContainerRef = useRef<any>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [imageViewerUrl, setImageViewerUrl] = useState(productImages[0])

    const colorVariants = ['#2980b9', '#2ecc71', '#8e44ad'];
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
                        <div className="main-tags">
                            <div className="tsg-tag tag-free-shipping ">
                                <img src={shippingIcon} width={15} height={15} alt="" />
                                <span>Free Shipping</span>
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
                <Col sm={24} md={24} lg={5}>sdasd</Col>
            </Row>
        </div>
    )
}

export default ViewProduct
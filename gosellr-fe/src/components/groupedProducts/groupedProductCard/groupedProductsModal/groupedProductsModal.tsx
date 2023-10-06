import React, { useState } from 'react'
import "./groupedProductsModal.scss"
import { Avatar, Button, Col, Image, Radio, Rate, Row, Switch } from 'antd'
import arrowLeftIcon from "../../../../assets/icons/angle-left.svg"

const GroupedProductsModal = ({ setIsViewGroupedProductModal, productData }: any) => {
    const [selectedSeller, setSelectedSeller] = useState<any>({})
    console.log("selectedSeller", selectedSeller)
    return (
        <>
            <div className="cus-modal-fr-bt" >
                <div className="close-wrapper" onClick={() => setIsViewGroupedProductModal(false)}></div>
                <div className="content-modal">
                    <Row gutter={[20, 20]} style={{ marginTop: "-0px" }}>
                        <Col sm={24} md={24} lg={9}>
                            <div className="wrapper-img-grp">
                                <Image style={{ borderRadius: "10px" }} src={productData.productImage} alt="" />
                            </div>
                        </Col>
                        <Col sm={24} md={24} lg={15}>
                            <div className="product-info-wrapper  cus-scroll-style">
                                <h3>{productData.productLabel}</h3>
                                <div className="ratings">
                                    <Rate className="product-rating" disabled defaultValue={3.5} />
                                    <p><span>367</span> Ratings</p>
                                </div>
                                <div className="discription">
                                    <h4>Discription</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, commodi quibusdam facere molestiae laborum at ab voluptate quas temporibus enim non earum. Delectus animi placeat temporibus alias eligendi suscipit neque.
                                    </p>
                                </div>
                                <div className="sellers-nearby">
                                    <h4>Sellers near by </h4>

                                    {
                                        selectedSeller?.storeName?.length ?
                                            <>
                                                <div className="process-seller">
                                                    <div className="head" onClick={() => setSelectedSeller({})}>
                                                        <div className="inset-hd">
                                                            <img src={arrowLeftIcon} width={15} height={15} alt="" />
                                                            <h3>{selectedSeller.storeName}</h3>
                                                        </div>

                                                        <div className="exp-selling-at">
                                                            Selling at <span>RS.{selectedSeller.sellingAt}</span>
                                                        </div>
                                                    </div>
                                                    <br />

                                                    <h4>Select Rider</h4>
                                                    <br />

                                                    <Radio.Group >
                                                        <Radio value={1}>Select my own rider</Radio>
                                                        <Radio value={2}>Leave it on store</Radio>
                                                    </Radio.Group>
                                                    <br />
                                                    <br />
                                                    <Button type='primary'>Continue </Button>

                                                </div>
                                            </>
                                            :
                                            <>
                                                {
                                                    productData.sellersNearBy.map((seller: any) => (
                                                        <div className="wrapper-sellers">
                                                            <div className="box-sellers">
                                                                <div className="seller-info-main">
                                                                    <div className="wrapper-inset">
                                                                        <Avatar size={40} icon={<img src={seller.storeImage} alt="" />} />
                                                                        <div className="seller-info">
                                                                            <h2>{seller.storeName}</h2>
                                                                            <div className='tags'>
                                                                                <div className="exp-location">
                                                                                    Location
                                                                                </div>
                                                                                <div className="exp-dt">
                                                                                    <span>{seller.distance}</span>Away
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right-area">
                                                                        <div className="exp-selling-at">
                                                                            Selling at <span>RS.{seller.sellingAt}</span>
                                                                        </div>
                                                                        <Button className="exp-select" onClick={() => setSelectedSeller(seller)}>
                                                                            Select
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </>
                                    }



                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default GroupedProductsModal
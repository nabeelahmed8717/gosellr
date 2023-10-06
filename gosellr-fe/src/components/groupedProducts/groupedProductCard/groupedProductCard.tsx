import React, { useEffect, useState } from 'react'
import "./groupedProductCard.scss"
import { Button, Col, Image, Modal, Rate, Row } from 'antd'
import { Avatar, Divider, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import GroupedProductsModal from './groupedProductsModal/groupedProductsModal';

const GroupedProductCard = ({ productData }: any) => {

    const [isViewGroupedProductModal, setIsViewGroupedProductModal] = useState(false)
   


    useEffect(() => {
        if (isViewGroupedProductModal) {
            // Add the class to disable scrolling
            document.body.classList.add('disable-scroll');
        } else {
            // Remove the class to enable scrolling
            document.body.classList.remove('disable-scroll');
        }

        return () => {
            // Cleanup: Remove the class when the component unmounts
            document.body.classList.remove('disable-scroll');
        };
    }, [isViewGroupedProductModal]);

    return (
        <>

            <div className="grouped-product-card-main" onClick={() => setIsViewGroupedProductModal(true)}>
                <div className="product-image">
                    <img src={productData?.productImage} alt="" />
                </div>
                <div className="roll-cage">
                    <div className="product-title-and-discription">
                        <h3>{productData?.productLabel}</h3>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Rate className="product-rating" disabled defaultValue={productData?.productRatings} />
                        <p style={{ fontSize: "12px", color: 'rgb(116 116 116)', marginTop: "6px" }}>( {productData?.productRatings} )</p>
                    </div>
                    <div className="badges-dept">
                        {
                            productData?.verifications.includes("EDR") &&
                            <div className='badge badge-edr'><span>EDR</span></div>
                        }
                        {
                            productData?.verifications.includes("PSS") &&
                            <div className='badge badge-pss'><span>PSS</span></div>
                        }

                    </div>
                    <div className="users-selling">
                        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                            {productData.sellers.map((img: any) => (
                                <Avatar src={img} />
                            ))}
                            <Tooltip title="Ant User" placement="top">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            </Tooltip>
                            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                    </div>

                    <div className='product-price'><span>{productData?.productPriceFrom}</span> - <span>{productData?.productPriceTo}</span></div>
                </div>
            </div>

            {/* <Modal rootClassName='view-grouped-product-modal' closeIcon={false} open={isViewGroupedProductModal} footer={false} onOk={() => setIsViewGroupedProductModal(false)} onCancel={() => setIsViewGroupedProductModal(false)}>
                <Row gutter={[20, 20]} style={{marginTop:"-0px"}}>
                    <Col sm={24} md={24} lg={9}>
                        <div className="wrapper-img-grp">
                            <Image style={{ borderRadius: "10px" }} src={productData.productImage} alt="" />
                        </div>
                    </Col>
                    <Col sm={24} md={24} lg={15}>
                        <div className="product-info-wrapper">
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
                                <div className="wrapper-sellers">
                                    <div className="box-sellers">
                                        <div className="seller-info-main">
                                            <div className="wrapper-inset">
                                            <Avatar size={40} icon={<img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="" />} />
                                            <div className="seller-info">
                                                <h2>Shop it</h2>
                                                <div className='tags'><Button>location</Button></div>
                                            </div>
                                            </div>
                                            <div className="exp-dt">
                                                <span>22m</span>Away
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Modal> */}


            {isViewGroupedProductModal &&

                <GroupedProductsModal
                    setIsViewGroupedProductModal={setIsViewGroupedProductModal}
                    productData={productData}
                />

            }



        </>



    )
}

export default GroupedProductCard
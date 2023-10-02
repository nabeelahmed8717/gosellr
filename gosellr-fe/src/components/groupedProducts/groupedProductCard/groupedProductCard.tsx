import React from 'react'
import "./groupedProductCard.scss"
import { Rate } from 'antd'
import { Avatar, Divider, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

const GroupedProductCard = ({productData}:any) => {
    return (
        <div className="grouped-product-card-main">
            <div className="product-image">
                <img src={productData?.productImage} alt="" />
            </div>
            <div className="roll-cage">
                <div className="product-title-and-discription">
                    <h3>{productData?.productLabel}</h3>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
                <Rate className="product-rating" disabled defaultValue={productData?.productRatings} />
                <p style={{fontSize:"12px", color:'rgb(116 116 116)', marginTop:"6px"}}>( {productData?.productRatings} )</p>
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
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
            </div>

                <div className='product-price'><span>{productData?.productPriceFrom}</span> - <span>{productData?.productPriceTo}</span></div>
            </div>


            
            
        </div>
    )
}

export default GroupedProductCard
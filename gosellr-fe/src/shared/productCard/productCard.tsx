import React from 'react'
import "./productCard.scss"
import { Rate } from 'antd'

const ProductCard = ({ className, productData }: any) => {
    return (
        <div className='product-main-wrapper product-card-wrapper'>
            <div className="product-image">
                <img src={productData?.productImage} alt="" />
            </div>
            <div className="roll-cage">
                <div className="product-title-and-discription">
                    <h3>{productData?.productLabel}</h3>
                </div>
                <Rate className="product-rating" disabled defaultValue={productData?.productRatings} />
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
                <div className='product-price'><span>{productData?.productPrice}</span></div>
            </div>
        </div>
    )
}

export default ProductCard
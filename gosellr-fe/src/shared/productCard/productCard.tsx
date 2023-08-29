import React from 'react'
import "./productCard.scss"
import { Rate } from 'antd'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ className, productData }: any) => {
    const navigate = useNavigate()
    return (
        <div className='product-main-wrapper product-card-wrapper' onClick={() => navigate('../view-Product')}>
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
                <div className='product-price'><span>{productData?.productPrice}</span></div>
            </div>
        </div>
    )
}

export default ProductCard
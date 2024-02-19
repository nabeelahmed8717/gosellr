import React from 'react'
import "./productCard.scss"
import { Button, Rate } from 'antd'
import { useNavigate } from 'react-router-dom'
import plusIcon from "../../assets/icons/plus-small.svg"

const ProductCard = ({ className, productData }: any) => {
    const navigate = useNavigate()
    return (
        <div className='product-main-wrapper product-card-wrapper' onClick={() => navigate('../view-product')}>
            <div className="product-image">
                <img src={productData?.productImage} loading='lazy' alt="" />
                <Button className='add'> <img src={plusIcon} width={20} height={20} alt="" /> Add</Button>
            </div>
            <div className="roll-cage">
                <div className='product-price'><span>{productData?.productPrice}</span></div>
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
            </div>
        </div>
    )
}

export default ProductCard
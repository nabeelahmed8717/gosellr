import React from 'react'
import "./productCard.scss"
import { Rate } from 'antd'

const ProductCard = ({ className }: any) => {
    return (
        <div className='product-main-wrapper product-card-wrapper'>
            <div className="product-image"></div>
            <div className="roll-cage">
                <div className="product-title-and-discription">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet  ipsum dolor sit amet</h3>
                </div>
                <Rate className="product-rating" disabled defaultValue={2} />
                <div className="badges-dept">
                    <div className='badge badge-pss'><span>PSS</span></div>
                </div>
                <div className='product-price'><span>$20</span></div>
            </div>
        </div>
    )
}

export default ProductCard
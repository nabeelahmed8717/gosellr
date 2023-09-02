import React from 'react'
import './productRatings.scss'
import { Rate } from 'antd'

const ProductRatings = () => {
  return (
    <div className='main-rating-card'>
      <Rate className="product-rating-user" disabled defaultValue={3.5} />
      <p className='user-name'>By <span>Willam Marks</span> &bull; <span className='time-span'>2 days ago</span> </p>
      <div className="product-comments">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure delectus sequi quasi quia facilis magni non dolore pariatur maiores! Itaque tempora iste quaerat ipsa quisquam soluta totam nemo quam?</div>
    </div>
  )
}

export default ProductRatings
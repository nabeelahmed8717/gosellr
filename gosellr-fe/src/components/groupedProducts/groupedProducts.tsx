import React, { useState } from 'react'
import "./groupedProducts.scss"
import { Button, Input, Modal } from 'antd'

import searchIcon from "../../assets/icons/fi-rs-search.svg"
import infoIcon from "../../assets/icons/info.svg"
import GroupedProductCard from './groupedProductCard/groupedProductCard'
import { groupedDummyProducts } from '../../mock/groupedDummyProducts'

const GroupedProducts = () => {
  return (
    <div className='grouped-products-wrapper-main'>
      <div className="head-info-adver">
        <h2>Grouped Products</h2>
        <h3>Designed to help you in finding best products and sellers near by you</h3>
        <div className="info-tags">
          <Button className="learn-more"><img src={infoIcon} width={16} height={16} alt="" /> Learn more</Button>
        </div>
        <Input placeholder="Find in grouped products" suffix={<img src={searchIcon} width={20} height={20} alt="" />} rootClassName='search-grouped-products' />
      </div>
      <div className="grouped-products-render">
        {
          groupedDummyProducts.map((item: any) => (
            <GroupedProductCard productData={item} />
          ))
        }
      </div>
      <br />
      <br />
      <br />
      <br />



    </div>
  )
}

export default GroupedProducts
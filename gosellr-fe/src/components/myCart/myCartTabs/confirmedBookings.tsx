import { Table } from 'antd';
import React from 'react'
import type { TabsProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import cancelIcon from "../../../assets/icons/cancel-colored.svg"
import CartItem from './viewBooking/cartItems/cartItems';

const ConfirmedBookings = () => {

  const bookedProducts: any = [
    {
      productID: 1,
      productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgz-HX3jewf04u-DBlYZo1G5mxB5cgYe5fdg&usqp=CAU',
      productLabel: "Wireless Bluetooth Headphones black ",
      quantity: 3,
      productPrice: 99,
    },
    {
      productID: 2,
      productImage: 'https://www.iheartpublix.com/wp-content/uploads/2022/02/Stonyfield-Tub-scaled-1600x1200.jpg',
      productLabel: "Organic Greek Yogurt (32 oz) good for health",
      quantity: 4,
      productPrice: 5,
    },
  
  ];
  
 

  return (
   <div>
    
   </div>
  )
}

export default ConfirmedBookings
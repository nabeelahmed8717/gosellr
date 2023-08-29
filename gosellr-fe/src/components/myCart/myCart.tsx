import React from 'react'
import './myCart.scss'
import Table, { ColumnsType } from 'antd/es/table';


import { Tabs, TabsProps } from 'antd';
import PendingBookings from './myCartTabs/pendingBookings';
import ConfirmedBookings from './myCartTabs/confirmedBookings';


const MyCart = () => {




  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Cart`,
      children: <PendingBookings />,
    },
    {
      key: '2',
      label: `Cart History`,
      children: <ConfirmedBookings />,
    }
  ];

  return (
    <div className="bookings-mian-wrapper">
      <div className="header-content">
        <h2 className='fs-24 fw-600'>Cart</h2>
        <p className='fs-16 light-grey'>View and Track Your Orders</p>
      </div>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='tabs-cart' />


    </div>
  )
}

export default MyCart
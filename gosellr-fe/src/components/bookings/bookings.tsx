import React from 'react'
import './bookings.scss'
import Table, { ColumnsType } from 'antd/es/table';


import { Tabs, TabsProps } from 'antd';
import PendingBookings from './bookingsTabs/pendingBookings';
import ConfirmedBookings from './bookingsTabs/confirmedBookings';


const Bookings = () => {




  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Pending Bookings`,
      children: <PendingBookings />,
    },
    {
      key: '2',
      label: `Confirmed Bookings`,
      children: <ConfirmedBookings />,
    }
  ];

  return (
    <div className="bookings-mian-wrapper">
      <div className="header-content">
        <h2 className='fs-24 fw-600'>Bookings</h2>
        <p className='fs-16 light-grey'>View and Track Your Reservations</p>
      </div>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />


    </div>
  )
}

export default Bookings
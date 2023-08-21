import { Table } from 'antd';
import React, { useState } from 'react'
import type { MenuProps, TabsProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import cancelIcon from "../../../assets/icons/cancel-colored.svg"
import viewIcon from "../../../assets/icons/view.svg"
import dotsIcon from "../../../assets/icons/dots.svg"
import { Dropdown, Space } from 'antd';
import ViewBooking from './viewBooking/viewBooking';

const PendingBookings = () => {


const [isViewBookingsModal, setIsViewBookingsModal] = useState(false)

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='d-flex align-center' style={{ gap: "10px", }} onClick={() => setIsViewBookingsModal(true)}>
          <img src={viewIcon} width={20} height={20} alt="" />
          <label>View Booking</label>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className='d-flex align-center' style={{ gap: "10px", }}>
          <img src={cancelIcon} width={20} height={20} alt="" />
          <label>Cancel Booking</label>
        </div>
      ),
    },
  ];

  interface DataType {
    key: string;
    name: string;
  }

  const columns: ColumnsType<any> = [
    {
      title: 'Seller Name',
      dataIndex: 'sellerName',
      key: 'sellerName',
    },
    {
      title: 'Service Tag',
      dataIndex: 'serviceTag',
      key: 'serviceTag',
    },
    {
      title: 'Service Type',
      dataIndex: 'serviceType',
      key: 'serviceType',
    },
    {
      title: 'Booking Date',
      dataIndex: 'bookingDate',
      key: 'bookingDate',
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (

        <>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img src={dotsIcon} width={20} height={20} alt="" />
              </Space>
            </a>
          </Dropdown>
        </>
      ),
    },

  ];

  const bookingsData: any[] = [
    {
      key: '1',
      sellerName: 'John Brown',
      serviceTag: 'House Cleaning',
      serviceType: 'Conditional',
      bookingDate: '01-05-2023',
      paymentStatus: 'Paid',
    },
    {
      key: '2',
      sellerName: 'Sara Andrew',
      serviceTag: 'IT Consultant',
      serviceType: 'Un Conditional',
      bookingDate: '16-05-2023',
      paymentStatus: 'Un Paid',
    },
    {
      key: '3',
      sellerName: 'Sara Andrew',
      serviceTag: 'IT Consultant',
      serviceType: 'Un Conditional',
      bookingDate: '16-05-2023',
      paymentStatus: 'Un Paid',
    },
    {
      key: '4',
      sellerName: 'Sara Andrew',
      serviceTag: 'IT Consultant',
      serviceType: 'Un Conditional',
      bookingDate: '16-05-2023',
      paymentStatus: 'Un Paid',
    },
  ];


  return (
    <div className="wrapper-table">
      <Table columns={columns} dataSource={bookingsData} scroll={{ x: "max-content" }} />
      <ViewBooking isViewBookingsModal={isViewBookingsModal} setIsViewBookingsModal={setIsViewBookingsModal} />
    </div>

  )
}

export default PendingBookings
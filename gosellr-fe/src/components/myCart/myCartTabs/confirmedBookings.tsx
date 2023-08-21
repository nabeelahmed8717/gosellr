import { Table } from 'antd';
import React from 'react'
import type { TabsProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import cancelIcon from "../../../assets/icons/cancel-colored.svg"

const ConfirmedBookings = () => {


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
        }
        
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
      ];


  return (
    <div className="wrapper-table">
      <Table columns={columns} dataSource={bookingsData} scroll={{ x: "max-content" }}/>
    </div>
  )
}

export default ConfirmedBookings
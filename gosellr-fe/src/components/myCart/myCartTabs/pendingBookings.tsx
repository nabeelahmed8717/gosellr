import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Input, Button, Modal } from 'antd';
import CartItem from './viewBooking/cartItems/cartItems';
import TextArea from 'antd/es/input/TextArea';
import editIcon from "../../../assets/icons/edit-pencil.svg"

interface Product {
  productID: number;
  productLabel: string;
  productPrice: number;
  quantity: number;
  productImage: string;
}

const initialProducts: Product[] = [
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

const PendingBookings: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isUpdateBuyerInfoModal, setisUpdateBuyerInfoModal] = useState(false)
  const [isLowBalance, setIsLowBalance] = useState(false)

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.productID === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const accountBalance = 540

  const total = products.reduce((acc, product) => acc + product.productPrice * product.quantity, 0);


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  useEffect(() => {
    if (accountBalance < total) {
      setIsLowBalance(true)
    } else {
      setIsLowBalance(false)
    }
  }, [total])


  return (
    <div className="cart-main-main-wrapper">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={16}>
          {products.map((product) => (
            <CartItem
              key={product.productID}
              product={product}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card style={{ border: "none" }} className='side-fg-wrapper'>

            <div className="checkout-wrapper">
              <div className='flex-checkout' style={{ color: "grey", fontSize: "12px" }}><em><span>Account Balance</span> <span className='over-all-price' style={{ color: "grey", fontSize: "14px" }}>${accountBalance}</span></em></div>
              <div className='flex-checkout'><span>Total Cart Price</span> <span className={`over-all-price ${isLowBalance ? 'low-balance' : ''}`}>${total}</span></div>
              {/* <div className='flex-checkout'><span>Total Cart Price</span> <span className='over-all-price'>${total}</span></div> */}
              <Button>Buy now</Button>
            </div>

            <div className='buyer-info-disp'>
              <h2>Buyer Information <Button onClick={() => setisUpdateBuyerInfoModal(true)}> <img src={editIcon} width={15} height={15} alt="" /> </Button></h2>

              <div className="buyer-info-gripper">
                <div className="flex-col"><h4>Full Name</h4><p>Willam marks</p></div>
                <div className="flex-col"><h4>Phone</h4><p>000 0000000</p></div>
                <div className="flex-col"><h4>Email</h4><p>willam.marks@mail.com</p></div>
                <div className="flex-col"><h4>Address</h4><p>dolor sit, amet consectetur, adipisicing elit. Repellendus vel</p></div>
              </div>

            </div>



          </Card>
        </Col>


        <Modal title="Edit Buyer Information" open={isUpdateBuyerInfoModal} footer={false} onOk={() => setisUpdateBuyerInfoModal(false)} onCancel={() => setisUpdateBuyerInfoModal(false)}>
          <div className="buyer-info-wrapper">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              // autoComplete="off"
              layout="vertical">

              <Row gutter={[20, 0]}>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Required field' }]}
                  >
                    <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Required field' }]}
                  >
                    <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Required field' }]}
                  >
                    <Input placeholder="Type here" style={{ width: '100%', height: '45px', }} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Required field' }]}
                  >
                    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
                  </Form.Item>
                </Col>

                
                <div className="d-flex" style={{gap:"10px", justifyContent:"flex-end", padding:"10px"}}>
                <Button className="btn-cancel d-btn">Cancel</Button>
                <Button className="btn-yellow d-btn">Update</Button>
                </div>
              </Row>
            </Form>
          </div>
        </Modal>

      </Row>
    </div>

  );
};

export default PendingBookings;

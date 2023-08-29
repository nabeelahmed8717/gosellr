import React from 'react';
import { Card, InputNumber } from 'antd';
import "./cartItems.scss"


const CartItem = ({ product, onQuantityChange }: any) => {

    const handleQuantityChange = (quantity: any) => {
        if (typeof quantity === 'number') {
            onQuantityChange(product.productID, quantity);
        }
    };
    return (
        <Card className='item-card-main'>
            <div className="cart-items-wrapper">
                <div className="image-wrapper">
                    <img src={product.productImage} alt={product.productLabel} />
                </div>
                <div className='gripper-products-utills'>
                    <h3>{product.productLabel}</h3>
                    <p>Price: ${product.productPrice}</p>
                    <div className="d-flex align-center" style={{ gap: '7px', marginTop: "10px" }}>
                        <p style={{ fontSize: "15px" }}>Quantity</p>
                        <InputNumber
                            min={1}
                            value={product.quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CartItem;

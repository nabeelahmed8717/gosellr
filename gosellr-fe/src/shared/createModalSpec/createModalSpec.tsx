import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import "./createModalSpec.scss"

import jobIcon from "../../assets/icons/store-alt.svg"
import offerIcon from "../../assets/icons/offer.svg"
import adIcon from "../../assets/icons/ad.svg"
import { useNavigate } from 'react-router-dom';

import createAnimated from "../../assets/animations/create-innovation.gif";

const CreateModalSpec = ({ visible, setVisible }: any) => {

  const navigate = useNavigate()

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove);
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleTouchMove:any = (event: TouchEvent) => {
    const touch = event.touches[0];
    const startY = touch.screenY;
    const endY = touch.clientY;
    if (startY - endY > 100) {
      setVisible(false);
    }
    console.log("working")
  };

  return (
    <div>
      <Modal
        visible={visible}
        onCancel={handleClose}
        footer={null}
        wrapClassName='create-modal-main-wrapper'
        title="Create"
      >
        <div className="modal-content">
          <div style={{width:'100%', display:"flex", justifyContent:"center"}}>
          <img src={createAnimated} height={250} alt="" />
          </div>
          <div className="boxes-create-main">
            <div className="boxes-create-main-bx" onClick={() => {navigate(`./create-store`, {state:'create-a-job-post'}); handleClose()}}>
              <div className="icon">
                <img src={jobIcon} width={15} height={15} alt="" />
              </div>
              <div className="d-flex flex-column justify-center">
                <p>Create Store</p>
                <span></span>
              </div>
            </div>
            <div className="boxes-create-main-bx" onClick={() => {navigate(`./create/${'create-an-offer'}`); handleClose()}}>
              <div className="icon">
                <img src={offerIcon} width={15} height={15} alt="" />
              </div>
              <div className="d-flex flex-column justify-center">
                <p>Create an offer</p>
                <span></span>
              </div>
            </div>
            <div className="boxes-create-main-bx" onClick={() => {navigate(`./create/${'create-an-ad'}`); handleClose()}}>
              <div className="icon">
                <img src={adIcon} width={15} height={15} alt="" />
              </div>
              <div className="d-flex flex-column justify-center">
                <p>Create an AD</p>
                <span></span>
              </div>
            </div>
          </div>

        </div>
      </Modal>
    </div>
  );
};

export default CreateModalSpec;

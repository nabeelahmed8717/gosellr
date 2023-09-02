import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import homeIcon from "../assets/icons/home-res.svg"
import cartIcon from "../assets/icons/cart-res.svg"
import chat from "../assets/icons/fi-rr-comment.svg"
import trendingIcon from "../assets/icons/trending-res.svg"
import plusIcon from "../assets/icons/plus-hex-icon.svg"
import plusGif from "../assets/icons/animated/plus.gif"

import NavBar from './navBar/navBar'

import "./mainLayout.scss"
import { Button, Modal } from 'antd'
import CreateModalSpec from '../shared/createModalSpec/createModalSpec'

const MainLayout = () => {

    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState<any>(false);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        function handleViewportChange(event: any) {
            setIsMobile(event.matches);
        }
        handleViewportChange(mediaQuery);
        mediaQuery.addListener(handleViewportChange);

        return () => {
            mediaQuery.removeListener(handleViewportChange);
        };
    }, []);
    return (
        <>
            <NavBar />
            <div style={{ paddingBottom: `${isMobile ? '60px' : '0px'}` }}>
                <Outlet />
            </div>
            {
                isMobile &&
                <>
                    <div className='bottom-nav-bar'>
                        <div className="nav-icons-box" onClick={() => navigate('./home')}>
                            <img src={homeIcon} width={21} height={21} alt="" />
                            {/* <span>Home</span> */}
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./cart')}>
                            <img src={cartIcon} width={21} height={21} alt="" />
                            {/* <span>Cart</span> */}
                        </div>
                        <div className="nav-icons-box" onClick={() => setVisible(true)}>
                            <img src={plusIcon} width={30} height={30} alt="" />
                            <span></span>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./home')}>
                            <img src={trendingIcon} width={21} height={21} alt="" />
                            {/* <span>Verified</span> */}
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./chat')}>
                            <img src={chat} width={21} height={21} alt="" />
                            {/* <span>Chat</span> */}
                        </div>
                    </div>
                </>
            }
            {!isMobile && <Button className='main-floating-button' onClick={() => setVisible(true)}><img src={plusGif} width={25} height={25} alt="" />Create</Button>}

            {/* <Modal title="Create" wrapClassName='create-modal-main-wrapper' footer={false} open={isCreateMenuOpen} onOk={() => setIsCreateMenuOpen(false)} onCancel={() => setIsCreateMenuOpen(false)}>

            </Modal> */}

            <CreateModalSpec visible={visible} setVisible={setVisible}/>
        </>
    )
}

export default MainLayout
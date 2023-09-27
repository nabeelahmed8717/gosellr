import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import homeIcon from "../assets/icons/home-res.svg"
import homeIconFilled from "../assets/icons/home-filled.svg"
import cartIcon from "../assets/icons/cart-res.svg"
import cartFilled from "../assets/icons/cart-filled.svg"
import chat from "../assets/icons/fi-rr-comment.svg"
import chatFilled from "../assets/icons/chat-filled.svg"
import trendingIcon from "../assets/icons/trending-res.svg"
import trendingIconFilled from "../assets/icons/badge-filled.svg"
import plusIcon from "../assets/icons/plus-hex-icon.svg"
import plusGif from "../assets/icons/animated/plus.gif"

import NavBar from './navBar/navBar'

import "./mainLayout.scss"
import { Button, Modal } from 'antd'
import CreateModalSpec from '../shared/createModalSpec/createModalSpec'

const MainLayout = () => {

    const navigate = useNavigate()

    const location = useLocation();
    const route = location.pathname;
    const routeArray = route.split('/');

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
                            <img className='un-hov' src={routeArray[1] == 'home' ? homeIconFilled : homeIcon} width={21} height={21} alt="" />
                            <img className='hov-nav-img' src={homeIconFilled} width={21} height={21} alt="" />
                            {/* <span>Home</span> */}
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./cart')}>
                            <img className='un-hov' src={routeArray[1] == 'cart' ? cartFilled : cartIcon} width={21} height={21} alt="" />
                            <img className='hov-nav-img' src={cartFilled} width={21} height={21} alt="" />
                            {/* <span>Cart</span> */}
                        </div>
                        <div className="nav-icons-box" onClick={() => setVisible(true)}>
                            <img src={plusIcon} width={30} height={30} alt="" />
                            <span></span>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./home')}>
                            <img className='un-hov' src={routeArray[1] == 'trending' ? trendingIconFilled : trendingIcon} width={21} height={21} alt="" />
                            <img className='hov-nav-img' src={trendingIconFilled} width={21} height={21} alt="" />
                            {/* <span>Verified</span> */}
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./chat')}>
                            <img className='un-hov' src={routeArray[1] == 'chat' ? chatFilled : chat} width={21} height={21} alt="" />
                            <img className='hov-nav-img' src={chatFilled} width={21} height={21} alt="" />
                            {/* <span>Chat</span> */}
                        </div>
                    </div>
                </>
            }
            {!isMobile && <Button className='main-floating-button' onClick={() => setVisible(true)}><img src={plusGif} width={25} height={25} alt="" />Create</Button>}

            {/* <Modal title="Create" wrapClassName='create-modal-main-wrapper' footer={false} open={isCreateMenuOpen} onOk={() => setIsCreateMenuOpen(false)} onCancel={() => setIsCreateMenuOpen(false)}>

            </Modal> */}

            <CreateModalSpec visible={visible} setVisible={setVisible} />
        </>
    )
}

export default MainLayout
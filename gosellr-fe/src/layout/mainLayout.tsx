import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import homeIcon from "../assets/icons/home.svg"
import bookings from "../assets/icons/fi-rs-notebook.svg"
import chat from "../assets/icons/fi-rr-comment.svg"
import services from "../assets/icons/stars.svg"
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
                            <img src={homeIcon} width={22} height={21} alt="" />
                            <span>Home</span>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./bookings')}>
                            <img src={bookings} width={22} height={22} alt="" />
                            <span>Bookings</span>
                        </div>
                        <div className="nav-icons-box" onClick={() => setVisible(true)}>
                            <img src={plusIcon} width={30} height={30} alt="" />
                            <span></span>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./services')}>
                            <img src={services} width={22} height={22} alt="" />
                            <span>Services</span>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./chat')}>
                            <img src={chat} width={22} height={20} alt="" />
                            <span>Chat</span>
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
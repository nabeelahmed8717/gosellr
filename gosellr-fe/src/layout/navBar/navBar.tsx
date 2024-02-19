import { Button, Drawer, Dropdown, Input, MenuProps, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./navBar.scss"

import brandLogoW from "../../assets/brandAssets/brand-logo-fr-white.svg"
import brandLogoB from "../../assets/brandAssets/brand-logo-fr-black.svg"
import homeIcon from "../../assets/icons/home.svg"
import bookings from "../../assets/icons/fi-rs-notebook.svg"
import chat from "../../assets/icons/fi-rr-comment.svg"
import services from "../../assets/icons/stars.svg"
import menu from "../../assets/icons/fi-rr-menu-burger.svg"
import cart from "../../assets/icons/cart.svg"

import userIcon from "../../assets/raw/userIconOne.svg"
import document from "../../assets/icons/document.svg"
import settings from "../../assets/icons/fi-rs-settings.svg"
import signOut from "../../assets/icons/fi-rs-sign-out.svg"

import Switch from "../../assets/icons/fi-rr-refresh.svg"
import searchIcon from "../../assets/icons/fi-rs-search.svg"
import storeIcon from "../../assets/raw/store-icon.png"

import { CloseOutlined } from '@ant-design/icons';
import UserProfileCard from './userProfileCard/userProfileCard';
import AdvanceSearch from '../../shared/advanceSearch/advanceSearch'

const NavBar = () => {

    const location = useLocation();
    const route = location.pathname;
    const routeArray = route.split('/');

    const [searchQuery, setsearchQuery] = useState()

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [isDrawerOpen, setisDrawerOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    // scrollnav 
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // scrollnav 

    const [isAdvanceSearch, setIsAdvanceSearch] = useState(false);

    const navigate = useNavigate()

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <>
                    <UserProfileCard />
                    <a href="https://gosellr-selling-dashboard.vercel.app" target="_blank" rel="noopener noreferrer">
                        <div className='store-red-alg'>
                            <div className='store-img'>
                                <img src={storeIcon} alt="" />
                            </div>
                            <div>
                                <h3>Example Store</h3>
                                <p style={{ fontSize: "12px", color: "#2980b9" }}>Click to navigate</p>
                            </div>
                        </div>
                    </a>
                </>
            ),
        },
        {
            key: '2',
            label: (
                <div className="drp-items-nav" style={{ marginTop: '10px' }}>
                    <img src={document} alt="" /> <p>Upload KYC</p>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className="drp-items-nav">
                    <img src={settings} alt="" /> <p>Settings</p>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className="drp-items-nav">
                    <img src={Switch} alt="" /> <p>Switch Dashboards</p>
                </div>
            ),
        },
        {
            key: '4',
            label: (
                <div className="drp-items-nav">
                    <img src={signOut} alt="" /> <p>Sign out</p>
                </div>
            ),
        }
    ]

    const respMenuItems = [
        {
            key: '1',
            label: 'Upload KYC',
            icon: document,
            link: './upload-kyc'
        },
        {
            key: '2',
            label: 'Settings',
            icon: settings,
            link: './settings'
        },
        {
            key: '3',
            label: 'Switch Dashboards',
            icon: Switch,
            link: ''
        },
        {
            key: '4',
            label: 'Settings',
            icon: settings,
            link: './home'
        },
        {
            key: '5',
            label: 'Sign out',
            icon: signOut,
            link: './home'
        }
    ]


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


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const navStylesCheckExcept = [
        {
            route: "home"
        },
        {
            route: "services"
        },
    ]
    const matchingRoute = navStylesCheckExcept.some(item => item.route === routeArray[1]);
    const classToRender = `main-header-wrapper ${matchingRoute ? "" : "main-header-fr-wh"
        } d-flex justify-between align-center anim-low-to-high`;

    return (
        <div
            // className={classToRender}
            className={`main-header-wrapper main-header-fr-wh d-flex justify-between align-center ${visible ? "anim-high-to-low" : "anim-low-to-high"}`}
            style={{ top: visible ? 0 : '-100px', }}
        >
            <div className="brand-logo"><img src={brandLogoW} alt="" /></div>
            {!isMobile && <div className="advance-search">
                <Input type='search' value={searchQuery} className='input-adv-search' placeholder='Search in Gosellr...' onClick={() => setIsAdvanceSearch(true)} suffix={<img src={searchIcon} alt="" width={20} height={20} />} />
            </div>}

            {isAuthenticated ?
                <div className="nav-menu d-flex align-items-center">

                    {!isMobile &&
                        <>
                            <Button className="rounded-buttons-nav" onClick={() => navigate('./home')}>
                                <img src={homeIcon} width={20} height={20} alt="" />
                            </Button>
                            <Button className="rounded-buttons-nav" onClick={() => navigate('./chat')}>
                                <img src={chat} width={20} height={20} alt="" />
                                <div className='sp-only-chat'>5</div>
                            </Button>
                            <Button className="rounded-buttons-nav" onClick={() => navigate('./cart')}>
                                <img src={cart} width={20} height={20} alt="" />
                                <div className='sp-only-chat'>2</div>
                            </Button>
                            <div className="user-profile-wrapper">
                                <Dropdown menu={{ items }} placement="bottomRight" arrow overlayClassName='pro-drp'>
                                    <div className="user-profile">
                                        <div className="user-img-wrapper"><img src={userIcon} alt="" /></div>
                                    </div>
                                </Dropdown>
                            </div>
                        </>}
                    {isMobile && <div className='advance-search-toggle-icon rounded-buttons-nav' onClick={() => setIsAdvanceSearch(true)}>
                        <img src={searchIcon} alt="" width={20} height={20} />
                    </div>}
                    {isMobile && <Button className="rounded-buttons-nav" onClick={() => setisDrawerOpen(true)}>
                        <img src={menu} width={20} height={20} alt="" />
                    </Button>}

                    <Drawer
                        title={<div className="d-flex justify-between align-center"><span className='fs-15 fw-600'>Menu</span><span onClick={() => setisDrawerOpen(false)}><CloseOutlined /></span></div>}
                        placement="left"
                        closable={false}
                        onClose={() => setisDrawerOpen(false)}
                        open={isDrawerOpen}
                        key="left"
                    >
                        <UserProfileCard isMobile={isMobile} />
                        <div className='store-red-alg'>
                            <div className='store-img'>
                                <img src={storeIcon} alt="" />
                            </div>
                            <h3>Example Store</h3>
                        </div>
                        {
                            respMenuItems.map((item: any) => (
                                <div className="drp-items-nav" onClick={() => { item.link && navigate(`${item.link}`) }} style={{ marginTop: '10px' }} key={item.key}>
                                    <img src={item.icon} alt="" /> <p>{item.label}</p>
                                </div>
                            ))
                        }

                    </Drawer>

                </div>
                :
                <div>
                    <Button className='login-btn' onClick={() => navigate('./sign-in')} >Sign In</Button>
                </div>
            }

            <AdvanceSearch isAdvanceSearch={isAdvanceSearch} setIsAdvanceSearch={setIsAdvanceSearch} setGetSearchQuery={setsearchQuery} />

        </div>
    )
}

export default NavBar
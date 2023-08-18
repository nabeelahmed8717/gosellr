import React, { useEffect, useState } from 'react'
import "./userProfile.scss"
import starIcon from "../../assets/icons/fi-sr-star.svg"
import userIcon from "../../assets/raw/driver.png"
import serviceBanner from "../../assets/raw/service-banner.jpg"
import { Col, Image, Row, Tabs, TabsProps } from 'antd'
import ProfileTab from './profileTabs/profileTab'
import OverviewTab from './profileTabs/overviewTab'
import CompletedBookingsTab from './profileTabs/completedBookingsTab'
import AchievmentsTabs from './profileTabs/achievmentsTabs'
import BooknowProcess from './booknowProcess/booknowProcess'

const UserProfile = () => {

    // scrollnav 
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // scrollnav 


    const [isBookNowModalOpen, setIsBookNowModalOpen] = useState(false)

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Profile`,
            children: <ProfileTab />,
        },
        {
            key: '2',
            label: `Overview`,
            children: <OverviewTab />,
        },
        {
            key: '3',
            label: `Completed Bookings`,
            children: <CompletedBookingsTab />,
        },
        {
            key: '4',
            label: `Achievments`,
            children: <AchievmentsTabs />,
        },
    ];

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


    return (
        <div className='user-profile-main-wrapper'>

            <Row gutter={25}>
                <Col lg={17}>
                    <div className="section-user-info">
                        <div className="wrapper-profile-banner">
                            {/* <img src={serviceBanner} alt="" /> */}
                            <Image src={serviceBanner} />
                        </div>
                        <div className="user-profile-wrapper">
                            <div className="user-image">
                                {/* <img src={userIcon} alt="" /> */}
                                <Image src={userIcon} style={{ borderRadius: "50%" }} />
                                <div className="badge-is-online"></div>
                            </div>
                            <div className="user-details">
                                <div className="main-details">
                                    <h2>Jhon Doe</h2>
                                    <p>Level : <span>09</span></p>
                                </div>
                                <div className="profile-ratings">
                                    <img src={starIcon} width={12} height={12} alt="" />
                                    <span>5.6</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-detailed-tab">
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                    <br />
                    <br />
                </Col>
                <Col lg={7}>
                    <div className="bg-side-info-wrap book-sec"
                        style={{ top: visible ? "65px" : '20px', }}>
                        <div style={{ padding: '15px' }}>
                            <h4 className='fs-16 fw-600 label-color'>Expected Hourly Rate</h4>
                            <h5 className='h-rate'>500 <span>Rs</span></h5>
                        </div>
                        <button onClick={() => setIsBookNowModalOpen(true)}>Book Now</button>
                    </div>
                </Col>
            </Row>

            <BooknowProcess isBookNowModalOpen={isBookNowModalOpen} setIsBookNowModalOpen={setIsBookNowModalOpen} />


        </div>
    )
}

export default UserProfile
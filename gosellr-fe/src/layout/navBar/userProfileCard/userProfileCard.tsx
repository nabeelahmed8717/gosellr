import React from 'react'
import userIcon from "../../../assets/raw/userIconOne.svg"
import verified from "../../../assets/icons/verified.svg"

const UserProfileCard = ({isMobile}:any) => {
    return (
        <div className='user-profile-lower-widet-card' style={{width:`${isMobile ? "100%" : "300px"}`}}>
            <div className="d-flex align-center" style={{ gap: '10px' }}>
                <div className="user-profile">
                    <div className="user-img-wrapper"><img src={userIcon} alt="" /></div>
                </div>
                <div className="d-flex flex-column">
                    <h2 className='fs-14 fw-600'>Willam Marks</h2>
                    <p className='fs-12 d-flex align-center' style={{ gap: '5px' }}>Verified <img src={verified} alt="" width={15} height={15} /></p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard
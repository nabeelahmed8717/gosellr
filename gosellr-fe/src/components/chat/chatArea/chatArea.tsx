import React, { useState } from 'react'
import userIconOne from "../../../assets/raw/driver.png"

import "./chatArea.scss"
import TextArea from 'antd/es/input/TextArea'
import sendIcon from "../../../assets/icons/send-icon.svg"
import arrowBack from "../../../assets/icons/angle-left.svg"

import chatWrapper from "../../../assets/wrapper/chat-wrapper.svg"

const ChatArea = ({ catchedChatData, setIsShowContacts, setIsShowChat, isMobile }: any) => {

    const [paddingBottom, setPaddingBottom] = useState(0)

    const handleInput = (event: any) => {
        event.target.style.height = '40px';
        event.target.style.height = `${event.target.scrollHeight}px`;

        if (event.target.scrollHeight > 60) {
            event.target.style.borderRadius = '10px';
            // for padding 
            const additionalPadding = event.target.scrollHeight - 60;
            const newPaddingBottom = Math.min(additionalPadding, 175); // Limit the padding to 175px
            setPaddingBottom(newPaddingBottom);

        } else {
            event.target.style.borderRadius = '60px';
            setPaddingBottom(0);
        }
        if (event.target.scrollHeight > 90) {
            event.target.style.overflow = 'scroll';
        }
        else {
            event.target.style.overflow = 'hidden';
        }
    };

    const handelChatDiaplay = () => {
        if (isMobile) {
            setIsShowContacts(true)
            setIsShowChat(false)
        }
    }
    return (
        <div className="main-chat-area-wrapper">
            {
                catchedChatData?.conversations?.length > 0 ?
                    <>
                        <div className="chat-head">
                            <div className="wrp-one-set">

                                {isMobile && <span onClick={handelChatDiaplay}><img src={arrowBack} width={20} alt="back" /></span>}
                                <div className="user-icon--details">
                                    <img src={catchedChatData.userIcon} alt="" />
                                </div>
                                <div className="user-chat-details">
                                    <h2>{catchedChatData.userName}</h2>
                                    {catchedChatData.isOnline ? <p>Online</p> : <p>Ofline</p>}
                                </div>
                            </div>
                        </div>

                        <div className="chat-area chat-width-controller" style={{ paddingBottom: `${paddingBottom}px` }}>
                            <div className="chat-wrap">
                                {
                                    catchedChatData.conversations.map((item: any, key: any) => (
                                        <div className={`chat-holder  ${item.type === "outGoing" && 'sx-outGoining'} ${item.type === "inComing" && 'sx-inComing'}`}>
                                            <div className="chat-bx">
                                                <p className='chat-content'>{item.message}</p>
                                                <div className="chat-time"><p>{item.messageTime}</p></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="chat-sender-area">
                            <TextArea placeholder="Type a message" className='textarea-autosize' style={{ height: '40px' }} onInput={handleInput} />
                            <img src={sendIcon} width={20} height={20} alt="" />
                        </div>
                    </>
                    :
                    <div className='else-chat-wrapper'>
                        <img src={chatWrapper} alt="" />
                        <h2>Select contacts to chat</h2>
                    </div>
            }


        </div>
    )
}



export default ChatArea
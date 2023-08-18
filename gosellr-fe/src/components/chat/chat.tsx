import React, { useEffect, useState } from 'react'
import "./chat.scss"
import { Col, Row } from 'antd'
import ChatContacts from './chatContacts/chatContacts'
import ChatArea from './chatArea/chatArea'

const Chat = () => {

  const [isMobile, setIsMobile] = useState(false);

  const [catchedChatData, setCatchedChatData] = useState({})

  const [isShowContacts, setIsShowContacts] = useState(true)
  const [isShowChat, setIsShowChat] = useState(false)

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
    <div className="main-chat-wrapper">
     {!isMobile && <div className="chat-header">
        <h2 className="fs-24 fw-600">Chat</h2>
        <p className="fs-16 light-grey">Chat with connections in your contacts</p>
      </div>}
      <div className="chat-inner-wrapper">
       {!isMobile &&
        <>
         <Row gutter={30}>
          <Col xs={24} sm={24} md={8} lg={6} >
            <ChatContacts setCatchedChatData={setCatchedChatData}/>
          </Col>
          <Col xs={24} sm={24} md={16} lg={18} >
            <ChatArea  catchedChatData={catchedChatData}/>
          </Col>
        </Row>
        </>
       }
       {/* For Responsive  */}
       {
        isMobile && 
        <>
        {isShowContacts && <ChatContacts isMobile={isMobile} setCatchedChatData={setCatchedChatData} catchedChatData={catchedChatData} setIsShowContacts={setIsShowContacts} setIsShowChat={setIsShowChat}/>}
        {isShowChat && <ChatArea isMobile={isMobile} catchedChatData={catchedChatData} setIsShowContacts={setIsShowContacts} setIsShowChat={setIsShowChat}/>}
        </>
       }
      </div>
    </div>
  )
}

export default Chat
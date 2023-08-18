import React from 'react'
import "./chatContacts.scss"
import { Input } from 'antd'

import userIconOne from "../../../assets/raw/driver.png"
import { chatData } from '../../../mock/chat'

const ChatContacts = ({ setCatchedChatData, catchedChatData, setIsShowChat, setIsShowContacts, isMobile }: any) => {
  const handelDisplay = (item: any) => {
    setCatchedChatData(() => {
      if (isMobile) {
        setIsShowChat(Object.keys(item).length > 0);
        setIsShowContacts(Object.keys(item).length === 0);
      }
      return item;
    });
  };

  return (
    <div className='main-chat-contents-wrapper'>
      <Input placeholder="Search contacts" className='search-contacts' />
      <div className="contacts-wrapper">

        {
          chatData.map((item: any, key: any) => (
            <div className="chat-contact-bx-sng" key={key} onClick={() => { handelDisplay(item) }}>
              <div className="wrap-icon-and-message">
                <div className="user-icon--details">
                  <img src={item.userIcon} alt="" />
                  <div className='is-active-sc' style={{ backgroundColor: `${item.isOnline ? "#27ae60" : "#bbbbbb"}` }}></div>
                </div>
                <div className="head--last-read">
                  <h2>{item.userName}</h2>
                  <p>{item.lastConversation}</p>
                </div>
              </div>
              <div className="time--unread">
                <p>{item.lastChatRead}</p>
                {item.unreadMessages > 0 && <p className='unread'>{item.unreadMessages}</p>}
              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default ChatContacts
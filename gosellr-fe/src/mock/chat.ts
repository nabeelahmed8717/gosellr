import userIconOne from "../assets/raw/driver.png";
import userIconTwo from "../assets/raw/plumber.png";
import userIconThree from "../assets/raw/consultant.png";

export const chatData = [
  {
    id: "01",
    userName: "David Smith",
    userIcon: userIconOne,
    isOnline: true,
    lastConversation:
      "Okay, I think I know what the problem is. I'll be there in an hour to take a look",
    unreadMessages: 2,
    lastChatRead: "02:34 am",
    conversations: [
      {
        chatId: "01",
        type: "outGoing",
        isRead: "true",
        message:
          "Hi, I'm having a problem with my sink. It's leaking and I'm not sure how to fix it",
        messageTime: "02:04 am",
      },
      {
        chatId: "02",
        type: "inComing",
        isRead: "true",
        message:
          "I can help you with that. Can you tell me what kind of sink you have and where the leak is coming from?",
        messageTime: "02:10 am",
      },
      {
        chatId: "03",
        type: "outGoing",
        isRead: "true",
        message:
          "I have a stainless steel sink and the leak is coming from the bottom",
        messageTime: "02:15 am",
      },
      {
        chatId: "04",
        type: "outGoing",
        isRead: "true",
        message: "any idea how to fix it?",
        messageTime: "02:20 am",
      },
      {
        chatId: "05",
        type: "inComing",
        isRead: "true",
        message:
          "Okay, I think I know what the problem is. I'll be there in an hour to take a look",
        messageTime: "02:25 am",
      },
    ],
  },
  {
    id: "02",
    userName: "John Doe",
    userIcon: userIconTwo,
    isOnline: false,
    lastConversation: "Let me know if you have any other questions",
    unreadMessages: 0,
    lastChatRead: "01:30 am",
    conversations: [
      {
        chatId: "06",
        type: "outGoing",
        isRead: "true",
        message: "Hi, I'm looking for a plumber to fix my leaky faucet",
        messageTime: "01:00 am",
      },
      {
        chatId: "07",
        type: "inComing",
        isRead: "true",
        message: "I can help you with that. What kind of faucet do you have?",
        messageTime: "01:05 am",
      },
      {
        chatId: "08",
        type: "outGoing",
        isRead: "true",
        message: "It's a Delta faucet",
        messageTime: "01:10 am",
      },
      {
        chatId: "09",
        type: "inComing",
        isRead: "true",
        message:
          "Okay, I think I know what the problem is. I'll be there in an hour to take a look",
        messageTime: "01:15 am",
      },
      {
        chatId: "10",
        type: "outGoing",
        isRead: "true",
        message: "Let me know if you have any other questions",
        messageTime: "01:20 am",
      },
    ],
  },
  {
    id: "03",
    userName: "Willam Marks",
    userIcon: userIconThree,
    isOnline: true,
    lastConversation: "Thanks for the help!",
    unreadMessages: 0,
    lastChatRead: "02:04 am",
    conversations: [
      {
        chatId: "11",
        type: "outGoing",
        isRead: "true",
        message:
          "Hi, I'm having a problem with my washing machine. It's not draining",
        messageTime: "01:04 am",
      },
      {
        chatId: "12",
        type: "inComing",
        isRead: "true",
        message:
          "I can help you with that. Can you tell me what kind of washing machine you have?",
        messageTime: "01:05 am",
      },
      {
        chatId: "13",
        type: "outGoing",
        isRead: "true",
        message: "It's a Whirlpool",
        messageTime: "02:04 am",
      },
      {
        chatId: "14",
        type: "inComing",
        isRead: "true",
        message:
          "Okay, I think I know what the problem is. I'll be there in an hour to take a look",
        messageTime: "01:20 am",
      },
      {
        chatId: "15",
        type: "outGoing",
        isRead: "true",
        message: "Thanks for the help!",
        messageTime: "02:04 am",
      },
    ],
  },
];

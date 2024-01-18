import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import Stomp from 'stompjs';
import '../styling/chatroom-style.css';
import TokenManager from '../api/TokenManager';
import ChatMessageAPI from '../api/ChatMessageAPI';

var stompClient = null;

const ChatRoom = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [adminChats, setAdminChats] = useState();
  const [userData, setUserData] = useState({
    email: '',
    connected: false,
    message: '',
  });
  const [tab, setTab] = useState('ADMIN');
  const [chatHistory, setChatHistory] = useState([]);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const containerStyle = {
    marginTop: '70px',
    marginBottom: '20px',
  };

  const connect = () => {
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe('/user/' + userData.email + '/private', onPrivateMessageReceived);
    stompClient.subscribe('/chatroom/admin', onAdminMessageReceived);
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderEmail: userData.email,
      status: 'JOIN',
    };
    stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
  };

  const onError = (err) => {
    console.log(err);
  };

  const onPrivateMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);

    

    if (payloadData.senderEmail === 'designdocument@gmail.com') {
      setAdminChats((prevChats) => [...prevChats, payloadData]);
    } else {
      if (privateChats.get(payloadData.senderEmail)) {
        privateChats.get(payloadData.senderEmail).push(payloadData);
        setPrivateChats(new Map(privateChats));
      } else {
        let list = [];
        list.push(payloadData);

        privateChats.set(payloadData.senderEmail, list);
        setPrivateChats(new Map(privateChats));
      }
    }
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      const receiverEmail = 'designdocument@gmail.com'; // Hardcoded receiver email
      const selectedUser = tab;

      let chatMessage = {
        senderEmail: userData.email,
        receiverEmail: selectedUser,
        message: userData.message,
        date: new Date().toLocaleString(),
        status: 'MESSAGE',
      };

      if (userData.email !== receiverEmail) {
        privateChats.get(receiverEmail).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }

      stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
      console.log("Sending message to customer from admin")
      setUserData({ ...userData, message: '' });
    }
  };

  const sendAdminValue = () => {
    if (stompClient) {
      const adminEmail = 'designdocument@gmail.com';
      let chatMessage = {
        senderEmail: userData.email,
        receiverEmail: adminEmail,
        message: userData.message,
        date: new Date().toLocaleString(),
        status: 'MESSAGE',
      };

      setAdminChats((prevChats) => {
        const newChats = prevChats ? [...prevChats, chatMessage] : [chatMessage];
        return newChats;
      });

      stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
      console.log("Sending message to admin from customer");
      setUserData({ ...userData, message: '' });
    }
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };

  const switchTab = async (newTab) => {
    setTab(newTab);
  
    if (userData.email !== 'designdocument@gmail.com' && newTab === 'ADMIN') {
      // Fetch and set admin chat history for regular users
      const adminHistory = await ChatMessageAPI.getChatHistory('designdocument@gmail.com');
      
      // Filter admin messages for the current user and update state
      const userAdminChats = adminHistory.filter(chat => chat.receiverEmail === userData.email || chat.senderEmail === userData.email);
      setAdminChats(userAdminChats);
    } else {
      // Fetch and set private chat history for regular users
      const history = await ChatMessageAPI.getChatHistory(newTab);
      const updatedChats = new Map(privateChats);
      updatedChats.set(newTab, history);
      setPrivateChats(updatedChats);
    }
  };

  const registerUser = async () => {
    connect();
    setTab('ADMIN'); // Connect to the admin tab by default
  
    const fetchChatHistory = async () => {
      try {
        const claims = TokenManager.getClaims();
        console.log('Token Claims:', claims);
    
        if (claims && claims.email) {
          const history = await ChatMessageAPI.getChatHistory(claims.email);
          setChatHistory(history);
          console.log('Chat History:', history);
    
          if (claims.email === 'designdocument@gmail.com') {
            const adminHistory = await ChatMessageAPI.getChatHistory('designdocument@gmail.com');
            console.log('Admin Chat History:', adminHistory);
    
            // Extract unique users from the admin chat history
            const adminTabs = Array.from(new Set(adminHistory.map(chat => chat.senderEmail)))
              .filter(email => email !== 'designdocument@gmail.com');
    
            console.log('admin tabs:', adminTabs);
    
            // Update the state with the extracted users as tabs
            setTabs(() => ['ADMIN', ...adminTabs]); // Include 'ADMIN' as a default tab
            setAdminChats(adminHistory);
          } else {
            // For regular users, extract unique users from the chat history
            const userTabs = Array.from(new Set(history.map(chat => chat.senderEmail)))
              .filter(email => email !== claims.email);
    
            // Update the state with the extracted users as tabs
            setTabs(['ADMIN', ...userTabs]); // Include 'ADMIN' as a default tab
          }
        }
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };
  
    // Fetch chat history when the component mounts
    fetchChatHistory();
  };

  useEffect(() => {
    const claims = TokenManager.getClaims();
    if (claims && claims.email) {
      setUserData({ ...userData, email: claims.email });
    }
  }, []);

  const onAdminMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);
    if (adminChats) {
      setAdminChats([...adminChats, payloadData]);
    } else {
      setAdminChats([payloadData]);
    }
  };

  return (
    <div style={containerStyle} className="container">
      {userData.connected ? (
        <div className="chat-box">
          <div className="user-info">
            <p>Your Email: {userData.email}</p>
          </div>
          <div className="member-list">
            <ul>
              {userData.email !== 'designdocument@gmail.com' && (
                <li onClick={() => switchTab('ADMIN')} className={`member ${tab.toLowerCase() === 'admin' && 'active'}`}>
                  Admin
                </li>
              )}
              {tabs
                .filter(name => name.toLowerCase() !== 'designdocument@gmail.com' && name.toLowerCase() !== 'admin') // Exclude admin's tab for regular users
                .map((name, index) => (
                  <li
                    onClick={() => switchTab(name)}
                    className={`member ${tab.toLowerCase() === name.toLowerCase() && 'active'}`}
                    key={index}
                  >
                    {name}
                  </li>
                ))}
            </ul>
          </div>
  
          <div className="chat-content">
            {tab === 'ADMIN' ? (
              <ul className="chat-messages">
                {Array.isArray(adminChats) && adminChats.map((chat, index) => (
                  <li className={`message ${chat.senderEmail === userData.email && 'self'}`} key={index}>
                    {chat.senderEmail !== userData.email && <div className="avatar">{chat.senderEmail}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderEmail === userData.email && <div className="avatar self">{chat.senderEmail}</div>}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="chat-messages">
                {Array.isArray(privateChats.get(tab)) &&
                  privateChats.get(tab).map((chat, index) => (
                    <li className={`message ${chat.senderEmail === userData.email && 'self'}`} key={index}>
                      {chat.senderEmail !== userData.email && <div className="avatar">{chat.senderEmail}</div>}
                      <div className="message-data">{chat.message}</div>
                      {chat.senderEmail === userData.email && <div className="avatar self">{chat.senderEmail}</div>}
                    </li>
                  ))}
              </ul>
            )}
            <div className="send-message">
              <input
                type="text"
                className="input-message"
                placeholder="enter the message"
                value={userData.message}
                onChange={handleMessage}
              />
              <button
                type="button"
                className="send-button"
                onClick={tab === 'ADMIN' ? sendAdminValue : sendPrivateValue}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="register">
          <button type="button" onClick={registerUser}>
            Connect
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatRoom;

//https://www.youtube.com/watch?v=ODGuq0XqG9A
// import React, {useState, useEffect} from 'react'
// import Stomp from 'stompjs'
// // import SockJS from 'sockjs-client'
// import SockJS from 'sockjs-client/dist/sockjs.min.js';
// import {List, Avatar, ListItem, ListItemText, TextField, Typography } from '@mui/material';
// import { Button } from 'react-bootstrap';


// const ChatRoom = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const [nickname, setNickname] = useState('');
//   const[stompClient, setStompClient] = useState(null);

//   useEffect(()=> {
//     const socket = new SockJS("http:/localhost:8000/ws");
//     const client = Stomp.over(socket);

//     client.connect({}, () => {
        

//       client.subscribe("/topic/messages", (message) => {
//         const receivedMessage = JSON.parse(message.body);
//         setMessages((prevMessages) => [...prevMessages, receivedMessage]);
//       });
//     });

//     setStompClient(client);

//     return () => {
//       client.disconnect();
//     };
//   }, []);

//   const handleNicknameChange = (e) => {
//     setNickname (e.target.value);
//   }

//   const handleMessageChange = (e) => {
//     setMessage (e.target.value);
//   }

//   const sendMessage = () => {
//     if(message.trim()){
//       const chatMessage ={
//         nickname,
//         content: message
//       };

//       stompClient.send("/app/chat", {}, JSON.stringify(chatMessage));
//       sendMessage("");
//     }
//   }
  
  
//   return (
//     <div>
//       <List>
//         {messages.map((msg,index)=> (
//           <ListItem key={index}>
//               <Avatar>{msg.nickname.charAt(0)}</Avatar>
//               <ListItemText 
//               primary={
//                 <Typography variant='subtitle1' gutterBottom>{msg.nickname}</Typography>
//               }
//               secondary={msg.content}  
//               />
//           </ListItem>
//         ))}
//       </List>
//       <div style={{display: "flex", alignItems: "center"}}>
//           <TextField id='standard-basic' label="nickname" variant='standard' value={nickname}/>
//           <TextField id='standard-basic' label="message" variant='standard' value={message}/>
//           <Button variant='contained' onClick={sendMessage} disabled={!message.trim()}>Send</Button>    
//       </div>
//     </div>
//   )
// }

// export default ChatRoom
//https://www.youtube.com/watch?v=ODGuq0XqG9A


import React, { useEffect, useState } from 'react'
// import {over} from "@stomp/stompjs"
// import { over } from '@stomp/stompjs';
// // import * as Stomp from '@stomp/stompjs';
// // const { over } = Stomp;
// import SockJS from "sockjs-client"
import Stomp from 'stompjs'
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import "../styling/chatroom-style.css"


var stompClient = null;

const ChatRoom = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM")
  const [userData, setUserData] = useState({
    username: "",
    receivername:"",
    connected: false,
    message: ""
  });
  useEffect(()=> {
    console.log(userData);
  }, [userData]);  

  const containerStyle = {
    maxHeight: '500px', // Change this value to your desired maximum height
    overflowY: 'auto',
    marginTop: '70px',
    marginBottom: '20px'
  };

  const connect =()=>{
    let Sock = new SockJS('http://localhost:8080/ws');
    // stompClient = over(Sock);
    stompClient = Stomp.over(Sock);
    stompClient.connect({},onConnected, onError);
}

const onConnected =() =>{
  setUserData({...userData, "connected": true})
  stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
  // stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
  stompClient.subscribe("/user" + userData.username + "/private", onPrivateMessageReceived);
  userJoin();
}

const userJoin=()=>{
  var chatMessage = {
    senderName: userData.username,
    status:"JOIN"
  };
  stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
}

  const handleValue = (event) => {
    const {name, value} = event.target;
    setUserData({...userData, [name]:value})
  }

  // const handleMessage = (event) => {
  //   const {value} = event.target;
  //   setUserData({...userData, "message":value})
  // }

  // const registerUser = ()=> {
  //   // let Sock = new SockJS("http://localhost:8080/ws");
  //   // stompClient = over(Sock);
  //   stompClient = Stomp.over(new SockJS("http://localhost:8080/ws"))
  //   stompClient.connect({},onConnected, onError);
  // }


  const onError =(err) => {
    console.log(err);
  }

  const onPublicMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);
    switch(payloadData.status){
      case "JOIN":
        if(!privateChats.get(payloadData.senderName)){
            privateChats.set(payloadData.senderName, []);
            setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  }

  const onPrivateMessageReceived = (payload) => {
    console.log(payload);
    let payloadData = JSON.parse(payload);
    //var payloadData = JSON.parse(payload.body);
    if(privateChats.get(payloadData.senderName)){
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    }else{
      let list = [];
      list.push(payloadData);

      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  }

  const sendPrivateValue=()=> {
    if(stompClient){
      let chatMessage={
          senderName:userData.username,
          receivername: tab,
          message:userData.message,
          status: "MESSAGE"
      };
      if(userData.username !== tab){
        privateChats.set(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message",{},JSON.stringify(chatMessage));
      setUserData({...userData, "message":""});
    }
  }

  const handleMessage =(event)=>{
    const {value}=event.target;
    setUserData({...userData,"message": value});
}

const handleUsername=(event)=>{
  const {value}=event.target;
  setUserData({...userData,"username": value});
}

const registerUser=()=>{
  connect();
} 

const sendValue=()=>{
  if (stompClient) {
    var chatMessage = {
      senderName: userData.username,
      message: userData.message,
      status:"MESSAGE"
    };
    console.log(chatMessage);
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    setUserData({...userData,"message": ""});
  }
}



  return (
    <div style={containerStyle} className='container'>
        {userData.connected?
        <div className='chat-box'>
            <div className='member-list'>
              <ul>
                <li onClick={()=> {setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`}>Chatroom</li>
                {[...privateChats.keys()].map((name, index)=> (
                  <li onClick={()=> {setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
              {tab==="CHATROOM" && <div className='chat-content'>
                <ul className='chat-messages'>
                  {publicChats.map((chat,index)=> (
                    // <li className='message' key={index}>
                    <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                          {chat.senderName !== userData.username && <div className='avatar'>{chat.senderName}</div>}
                          <div className='message-data'>{chat.message}</div>
                          {chat.senderName === userData.username && <div className='avatar self'>{chat.senderName}</div>}
                    </li>
                  ))}
                </ul>

                <div className="send-message">
                    <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendValue}>Send</button>
                </div>
              </div>}

              {tab!=="CHATROOM" && <div className='chat-content'>
                <ul className='chat-messages'>
                    {[...privateChats.get(tab)].map((chat, index)=> (
                      // <li className='message' key={index}>
                      <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                          {chat.senderName !== userData.username && <div className='avatar'>{chat.senderName}</div>}
                          <div className='message-data'>{chat.message}</div>
                          {chat.senderName === userData.username && <div className='avatar self'>{chat.senderName}</div>}
                      </li>
                    ))}
                </ul>
                {/* <ul className='chat-messages'>
                    {[...privateChats.get(tab)].map((chat, index)=> (
                      <li className='message' key={index}>
                        {chat.senderName !== userData.username && <div className='avatar'>{chat.senderName}</div>}
                        <div className='message-data'>{chat.message}</div>
                        {chat.senderName === userData.username && <div className='avatar self'>{chat.senderName}</div>}
                      </li>
                    ))}
                </ul> */}
                {/* <div className='send-message'>
                  <input type='text' className='input-message' name='message' placeholder={`Enter private message for ${tab}`} value={userData.message} onChange={handleValue}/>
                  <button type='button' className='send-button' onClick={sendPrivateMessage}>Send</button>
                </div> */}
                <div className="send-message">
                    <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
                </div>

              </div>}
            
        </div> 
        :
         <div className='register'>
            <input 
                id='user-name'
                name='userName'
                placeholder='Enter your name'
                value={userData.username}
                onChange={handleUsername}
                margin="normal"
            />
            <button type='button' onClick={registerUser}>
              Connect
            </button>
          </div>}
    </div>
  )
}

export default ChatRoom
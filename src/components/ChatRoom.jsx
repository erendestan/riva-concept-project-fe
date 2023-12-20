import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import Stomp from 'stompjs';
import '../styling/chatroom-style.css';

var stompClient = null;

const ChatRoom = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState('CHATROOM');
  const [userData, setUserData] = useState({
    username: '',
    receiverName: '',
    connected: false,
    message: '',
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const containerStyle = {
    maxHeight: '500px', // Change this value to your desired maximum height
    overflowY: 'auto',
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
    stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
    stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessageReceived);
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: 'JOIN',
    };
    stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
  };

  const handleValue = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const onError = (err) => {
    console.log(err);
  };

  const onPublicMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case 'JOIN':
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case 'MESSAGE':
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onPrivateMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);

      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      let chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: 'MESSAGE',
      };
      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: '' });
    }
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, username: value });
  };

  const registerUser = () => {
    connect();
  };

  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: 'MESSAGE',
      };
      console.log(chatMessage);
      stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: '' });
    }
  };

  return (
    <div style={containerStyle} className="container">
      {userData.connected ? (
        <div className="chat-box">
          <div className="member-list">
            <ul>
              <li onClick={() => setTab('CHATROOM')} className={`member ${tab === 'CHATROOM' && 'active'}`}>
                Chatroom
              </li>
              {[...privateChats.keys()].map((name, index) => (
                <li
                  onClick={() => setTab(name)}
                  className={`member ${tab === name && 'active'}`}
                  key={index}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {tab === 'CHATROOM' && (
            <div className="chat-content">
              <ul className="chat-messages">
                {publicChats.map((chat, index) => (
                  <li className={`message ${chat.senderName === userData.username && 'self'}`} key={index}>
                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                  </li>
                ))}
              </ul>

              <div className="send-message">
                <input
                  type="text"
                  className="input-message"
                  placeholder="enter the message"
                  value={userData.message}
                  onChange={handleMessage}
                />
                <button type="button" className="send-button" onClick={sendValue}>
                  Send
                </button>
              </div>
            </div>
          )}
          {tab !== 'CHATROOM' && (
            <div className="chat-content">
              <ul className="chat-messages">
                {[...privateChats.get(tab)].map((chat, index) => (
                  <li className={`message ${chat.senderName === userData.username && 'self'}`} key={index}>
                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                  </li>
                ))}
              </ul>

              <div className="send-message">
                <input
                  type="text"
                  className="input-message"
                  placeholder="enter the message"
                  value={userData.message}
                  onChange={handleMessage}
                />
                <button type="button" className="send-button" onClick={sendPrivateValue}>
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="register">
          <input
            id="user-name"
            name="userName"
            placeholder="Enter your name"
            value={userData.username}
            onChange={handleUsername}
            margin="normal"
          />
          <button type="button" onClick={registerUser}>
            Connect
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;


// import React, { useEffect, useState } from 'react'
// import Stomp from 'stompjs'
// import SockJS from 'sockjs-client/dist/sockjs.min.js';
// import "../styling/chatroom-style.css"


// var stompClient = null;

// const ChatRoom = () => {
//   const [privateChats, setPrivateChats] = useState(new Map());
//   const [publicChats, setPublicChats] = useState([]);
//   const [tab, setTab] = useState("CHATROOM")
//   const [userData, setUserData] = useState({
//     username: "",
//     receiverName:"",
//     connected: false,
//     message: ""
//   });
//   useEffect(()=> {
//     console.log(userData);
//   }, [userData]);  

//   const containerStyle = {
//     maxHeight: '500px', // Change this value to your desired maximum height
//     overflowY: 'auto',
//     marginTop: '70px',
//     marginBottom: '20px'
//   };

//   const connect =()=>{
//     let Sock = new SockJS('http://localhost:8080/ws');
//     // stompClient = over(Sock);
//     stompClient = Stomp.over(Sock);
//     stompClient.connect({},onConnected, onError);
// }

// const onConnected =() =>{
//   setUserData({...userData, "connected": true})
//   stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
//   // stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
//   stompClient.subscribe("/user/" + userData.username + "/private", onPrivateMessageReceived);
//   userJoin();
// }

// const userJoin=()=>{
//   var chatMessage = {
//     senderName: userData.username,
//     status:"JOIN"
//   };
//   stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
// }

//   const handleValue = (event) => {
//     const {name, value} = event.target;
//     setUserData({...userData, [name]:value})
//   }

//   // const handleMessage = (event) => {
//   //   const {value} = event.target;
//   //   setUserData({...userData, "message":value})
//   // }

//   // const registerUser = ()=> {
//   //   // let Sock = new SockJS("http://localhost:8080/ws");
//   //   // stompClient = over(Sock);
//   //   stompClient = Stomp.over(new SockJS("http://localhost:8080/ws"))
//   //   stompClient.connect({},onConnected, onError);
//   // }


//   const onError =(err) => {
//     console.log(err);
//   }

//   const onPublicMessageReceived = (payload) => {
//     let payloadData = JSON.parse(payload.body);
//     switch(payloadData.status){
//       case "JOIN":
//         if(!privateChats.get(payloadData.senderName)){
//             privateChats.set(payloadData.senderName, []);
//             setPrivateChats(new Map(privateChats));
//         }
//         break;
//       case "MESSAGE":
//         publicChats.push(payloadData);
//         setPublicChats([...publicChats]);
//         break;
//     }
//   }

//   const onPrivateMessageReceived = (payload) => {
//     console.log(payload);
//     let payloadData = JSON.parse(payload.body);
//     //var payloadData = JSON.parse(payload.body);
//     if(privateChats.get(payloadData.senderName)){
//       privateChats.get(payloadData.senderName).push(payloadData);
//       setPrivateChats(new Map(privateChats));
//     }else{
//       let list = [];
//       list.push(payloadData);

//       privateChats.set(payloadData.senderName, list);
//       setPrivateChats(new Map(privateChats));
//     }
//   }

//   const sendPrivateValue=()=> {
//     if(stompClient){
//       let chatMessage={
//           senderName:userData.username,
//           receiverName: tab,
//           message:userData.message,
//           status: "MESSAGE"
//       };
//       if(userData.username !== tab){
//         privateChats.get(tab).push(chatMessage);
//         setPrivateChats(new Map(privateChats));
//       }
//       stompClient.send("/app/private-message",{},JSON.stringify(chatMessage));
//       setUserData({...userData, "message":""});
//     }
//   }

//   const handleMessage =(event)=>{
//     const {value}=event.target;
//     setUserData({...userData,"message": value});
// }

// const handleUsername=(event)=>{
//   const {value}=event.target;
//   setUserData({...userData,"username": value});
// }

// const registerUser=()=>{
//   connect();
// } 

// const sendValue=()=>{
//   if (stompClient) {
//     var chatMessage = {
//       senderName: userData.username,
//       message: userData.message,
//       status:"MESSAGE"
//     };
//     console.log(chatMessage);
//     stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
//     setUserData({...userData,"message": ""});
//   }
// }

// if (stompClient) {
//               var chatMessage = {
//                 senderName: userData.username,
//                 message: userData.message,
//                 status:"MESSAGE"
//               };
//               console.log(chatMessage);
//               stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
//               setUserData({...userData,"message": ""});
//             }


//   return (
//     <div style={containerStyle} className='container'>
//         {userData.connected?
//         <div className='chat-box'>
//             <div className='member-list'>
//               <ul>
//                 <li onClick={()=> {setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`}>Chatroom</li>
//                 {[...privateChats.keys()].map((name, index)=> (
//                   <li onClick={()=> {setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>
//                     {name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//               {tab==="CHATROOM" && <div className='chat-content'>
//                 <ul className='chat-messages'>
//                   {publicChats.map((chat,index)=> (
//                     // <li className='message' key={index}>
//                     <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
//                           {chat.senderName !== userData.username && <div className='avatar'>{chat.senderName}</div>}
//                           <div className='message-data'>{chat.message}</div>
//                           {chat.senderName === userData.username && <div className='avatar self'>{chat.senderName}</div>}
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="send-message">
//                     <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
//                     <button type="button" className="send-button" onClick={sendValue}>Send</button>
//                 </div>
//               </div>}

//               {tab!=="CHATROOM" && <div className='chat-content'>
//                 <ul className='chat-messages'>
//                     {[...privateChats.get(tab)].map((chat, index)=> (
//                       // <li className='message' key={index}>
//                       <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
//                           {chat.senderName !== userData.username && <div className='avatar'>{chat.senderName}</div>}
//                           <div className='message-data'>{chat.message}</div>
//                           {chat.senderName === userData.username && <div className='avatar self'>{chat.senderName}</div>}
//                       </li>
//                     ))}
//                 </ul>
//                 {/* <ul className='chat-messages'>
//                     {[...privateChats.get(tab)].map((chat, index)=> (
//                       <li className='message' key={index}>
//                         {chat.senderName !== userData.username && <div className='avatar'>{chat.senderName}</div>}
//                         <div className='message-data'>{chat.message}</div>
//                         {chat.senderName === userData.username && <div className='avatar self'>{chat.senderName}</div>}
//                       </li>
//                     ))}
//                 </ul> */}
//                 {/* <div className='send-message'>
//                   <input type='text' className='input-message' name='message' placeholder={`Enter private message for ${tab}`} value={userData.message} onChange={handleValue}/>
//                   <button type='button' className='send-button' onClick={sendPrivateMessage}>Send</button>
//                 </div> */}
//                 <div className="send-message">
//                     <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
//                     <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
//                 </div>

//               </div>}
            
//         </div> 
//         :
//          <div className='register'>
//             <input 
//                 id='user-name'
//                 name='userName'
//                 placeholder='Enter your name'
//                 value={userData.username}
//                 onChange={handleUsername}
//                 margin="normal"
//             />
//             <button type='button' onClick={registerUser}>
//               Connect
//             </button>
//           </div>}
//     </div>
//   )
// }

// export default ChatRoom
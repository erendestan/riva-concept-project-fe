// import React, { useEffect, useState } from 'react';
// import SockJS from 'sockjs-client/dist/sockjs.min.js';
// import Stomp from 'stompjs';
// import '../styling/chatroom-style.css';
// import TokenManager from '../api/TokenManager';

// var stompClient = null;

// const ChatRoom = () => {
//   const [privateChats, setPrivateChats] = useState(new Map());
//   const [publicChats, setPublicChats] = useState([]);
//   const [systemMessages, setSystemMessages] = useState([]);
//   const [tab, setTab] = useState('CHATROOM');
//   const [receiver, setReceiver] = useState('');
//   const [userData, setUserData] = useState({
//     username: '',
//     receiverName: '',
//     connected: false,
//     message: '',
//   });

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   const containerStyle = {
//     maxHeight: '500px', // Change this value to your desired maximum height
//     overflowY: 'auto',
//     marginTop: '70px',
//     marginBottom: '20px',
//   };

//   const connect = () => {
//     let Sock = new SockJS('http://localhost:8080/ws');
//     stompClient = Stomp.over(Sock);
//     stompClient.connect({}, onConnected, onError);
//   };

//   const onSystemMessageReceived = (payload) => {
//     let payloadData = JSON.parse(payload.body);
  
//     // Handle system messages for the system user
//     switch (payloadData.status) {
//       case 'JOIN':
//         // Handle JOIN status if needed
//         break;
//       case 'MESSAGE':
//         // Handle MESSAGE status for the system user
//         // You may want to adjust the data structure depending on your needs
//         const systemMessages = privateChats.get(systemUser) || [];
//         systemMessages.push(payloadData);
//         privateChats.set(systemUser, systemMessages);
//         setPrivateChats(new Map(privateChats));
//         break;
//       default:
//         // Handle other status types if needed
//         break;
//     }
//   };

//   const onConnected = () => {
//     setUserData({ ...userData, connected: true });

//     stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
//     console.log(`Subscribed to /chatroom/public for user: ${userData.username}`);

    
//     stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessageReceived);
//     console.log(`Subscribed to /user/${userData.username}/private`);

//       // Subscribe to the system user's private channel
//       const systemUser = 'designdocument@gmail.com';
//       stompClient.subscribe(`/user/${systemUser}/private`, onSystemMessageReceived);
//       console.log(`Subscribed to /user/${systemUser}/private for user: ${userData.username}`);

//     userJoin();
//   };

//   const userJoin = () => {
//     var chatMessage = {
//       senderName: userData.username,
//       status: 'JOIN',
//     };
//     stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
//   };

//   const handleValue = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const onError = (err) => {
//     console.log(err);
//   };

//   const onPublicMessageReceived = (payload) => {
//     let payloadData = JSON.parse(payload.body);
//     switch (payloadData.status) {
//       case 'JOIN':
//         if (!privateChats.get(payloadData.senderName)) {
//           privateChats.set(payloadData.senderName, []);
//           setPrivateChats(new Map(privateChats));
//         }
//         break;
//       case 'MESSAGE':
//         publicChats.push(payloadData);
//         setPublicChats([...publicChats]);
//         break;
//     }
//   };

//   const onPrivateMessageReceived = (payload) => {
//     let payloadData = JSON.parse(payload.body);
//     if (privateChats.get(payloadData.senderName)) {
//       privateChats.get(payloadData.senderName).push(payloadData);
//       setPrivateChats(new Map(privateChats));
//     } else {
//       let list = [];
//       list.push(payloadData);

//       privateChats.set(payloadData.senderName, list);
//       setPrivateChats(new Map(privateChats));
//     }
//   };

//   const sendPrivateValue = () => {
//     if (stompClient) {
//       let chatMessage = {
//         senderName: userData.username,
//         // receiverName: tab,
//         // receiverName: userData.receiverName,
//         receiverName: tab === 'SYSTEM' ? 'designdocument@gmail.com' : tab,
//         message: userData.message,
//         status: 'MESSAGE',
//       };
//       if (userData.username !== tab) {
//         privateChats.get(tab).push(chatMessage);
//         setPrivateChats(new Map(privateChats));
//       }
//       stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
//       setUserData({ ...userData, message: '' });
//     }
//   };

//   const handleMessage = (event) => {
//     const { value } = event.target;
//     setUserData({ ...userData, message: value });
//   };

//   const handleUsername = (event) => {
//     const { value } = event.target;
//     setUserData({ ...userData, username: value });
//   };

//   const registerUser = () => {
//     connect();
//   };

//   const sendValue = () => {
//     if (stompClient) {
//       var chatMessage = {
//         senderName: userData.username,
//         message: userData.message,
//         status: 'MESSAGE',
//       };
//       console.log(chatMessage);
//       stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
//       setUserData({ ...userData, message: '' });
//     }
//   };

//   useEffect(() => {
//     // Fetch user details from claims and set email as username
//     const claims = TokenManager.getClaims();
//     if (claims && claims.email) {
//       setUserData({ ...userData, username: claims.email });
//     }
//   }, []);

//   return (
//     <div style={containerStyle} className="container">
//       {userData.connected ? (
//         <div className="chat-box">
//           <div className="member-list">
//             <ul>
//               <li onClick={() => setTab('CHATROOM')} className={`member ${tab === 'CHATROOM' && 'active'}`}>
//                 Chatroom
//               </li>
//               {[...privateChats.keys()].map((name, index) => (
//                 <li
//                   onClick={() => setTab(name)}
//                   className={`member ${tab === name && 'active'}`}
//                   key={index}
//                 >
//                   {name}
//                 </li>
//               ))}
//               <li onClick={() =>{ setTab('SYSTEM'); setReceiver('designdocument@gmail.com'); }} className={`member ${tab === 'SYSTEM' && 'active'}`}>
//                 System
//               </li>
//             </ul>
//           </div>
//           {tab === 'CHATROOM' && (
//             <div className="chat-content">
//               <ul className="chat-messages">
//                 {publicChats.map((chat, index) => (
//                   <li className={`message ${chat.senderName === userData.username && 'self'}`} key={index}>
//                     {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
//                     <div className="message-data">{chat.message}</div>
//                     {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
//                   </li>
//                 ))}
//               </ul>
//               <div className="send-message">
//                 <input
//                   type="text"
//                   className="input-message"
//                   placeholder="enter the message"
//                   value={userData.message}
//                   onChange={handleMessage}
//                 />
//                 <button type="button" className="send-button" onClick={sendValue}>
//                   Send
//                 </button>
//               </div>
//             </div>
//           )}
//           {tab !== 'CHATROOM' && tab !== 'SYSTEM' && (
//             <div className="chat-content">
//               <ul className="chat-messages">
//                 {[...privateChats.get(tab)].map((chat, index) => (
//                   <li className={`message ${chat.senderName === userData.username && 'self'}`} key={index}>
//                     {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
//                     <div className="message-data">{chat.message}</div>
//                     {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
//                   </li>
//                 ))}
//               </ul>
//               <div className="send-message">
//                 <input
//                   type="text"
//                   className="input-message"
//                   placeholder="enter the message"
//                   value={userData.message}
//                   onChange={handleMessage}
//                 />
//                 <button type="button" className="send-button" onClick={sendPrivateValue}>
//                   Send
//                 </button>
//               </div>
//             </div>
//           )}
//           {tab === 'SYSTEM' && (
//             <div className="chat-content">
//               <ul className="chat-messages">
//                 {systemMessages.map((chat, index) => (
//                   <li className={`message ${chat.senderName === userData.username && 'self'}`} key={index}>
//                     {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
//                     <div className="message-data">{chat.message}</div>
//                     {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
//                   </li>
//                 ))}
//               </ul>
//               <div className="send-message">
//                 <input
//                   type="text"
//                   className="input-message"
//                   placeholder="enter the message"
//                   value={userData.message}
//                   onChange={handleMessage}
//                 />
//                 <button type="button" className="send-button" onClick={sendValue}>
//                   Send
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="register">
//           <input
//             id="user-name"
//             name="userName"
//             placeholder="Enter your name"
//             value={userData.username}
//             onChange={handleUsername}
//             margin="normal"
//           />
//           <button type="button" onClick={registerUser}>
//             Connect
//           </button>
//         </div>
//       )}
//     </div>
//   );
//   return (
//     <div style={containerStyle} className="container">
//       {userData.connected ? (
//         <div className="chat-box">
//           <div className="member-list">
//             <ul>
//               <li onClick={() => setTab('CHATROOM')} className={`member ${tab === 'CHATROOM' && 'active'}`}>
//                 Chatroom
//               </li>
//               {[...privateChats.keys()].map((name, index) => (
//                 <li
//                   onClick={() => setTab(name)}
//                   className={`member ${tab === name && 'active'}`}
//                   key={index}
//                 >
//                   {name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {tab === 'CHATROOM' && (
//             <div className="chat-content">
//               <ul className="chat-messages">
//                 {publicChats.map((chat, index) => (
//                   <li className={`message ${chat.senderName === userData.username && 'self'}`} key={index}>
//                     {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
//                     <div className="message-data">{chat.message}</div>
//                     {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
//                   </li>
//                 ))}
//               </ul>

//               <div className="send-message">
//                 <input
//                   type="text"
//                   className="input-message"
//                   placeholder="enter the message"
//                   value={userData.message}
//                   onChange={handleMessage}
//                 />
//                 <button type="button" className="send-button" onClick={sendValue}>
//                   Send
//                 </button>
//               </div>
//             </div>
//           )}
//           {tab !== 'CHATROOM' && (
//             <div className="chat-content">
//               <ul className="chat-messages">
//                 {[...privateChats.get(tab)].map((chat, index) => (
//                   <li className={`message ${chat.senderName === userData.username && 'self'}`} key={index}>
//                     {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
//                     <div className="message-data">{chat.message}</div>
//                     {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
//                   </li>
//                 ))}
//               </ul>

//               <div className="send-message">
//                 <input
//                   type="text"
//                   className="input-message"
//                   placeholder="enter the message"
//                   value={userData.message}
//                   onChange={handleMessage}
//                 />
//                 <button type="button" className="send-button" onClick={sendPrivateValue}>
//                   Send
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="register">
//           <input
//             id="user-name"
//             name="userName"
//             placeholder="Enter your name"
//             value={userData.username}
//             onChange={handleUsername}
//             margin="normal"
//           />
//           <button type="button" onClick={registerUser}>
//             Connect
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatRoom;

import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import Stomp from 'stompjs';
import '../styling/chatroom-style.css';
import TokenManager from '../api/TokenManager';

var stompClient = null;

const ChatRoom = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [adminChats, setAdminChats] = useState(); //new added
  const [userData, setUserData] = useState({
    email: '',
    connected: false,
    message: '',
  });
  const [tab, setTab] = useState('CHATROOM');

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const containerStyle = {
    maxHeight: '500px',
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
    stompClient.subscribe('/user/' + userData.email + '/private', onPrivateMessageReceived);
    
    stompClient.subscribe('/chatroom/admin', onAdminMessageReceived); //new added
    stompClient.subscribe('/chatroom/admin', onPrivateMessageReceived)
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.email,
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

  // const onPrivateMessageReceived = (payload) => {
  //   let payloadData = JSON.parse(payload.body);
  //   if (privateChats.get(payloadData.senderName)) {
  //     privateChats.get(payloadData.senderName).push(payloadData);
  //     setPrivateChats(new Map(privateChats));
  //   } else {
  //     let list = [];
  //     list.push(payloadData);

  //     privateChats.set(payloadData.senderName, list);
  //     setPrivateChats(new Map(privateChats));
  //   }
  // };

 
// Update the onPrivateMessageReceived function
const onPrivateMessageReceived = (payload) => {
  let payloadData = JSON.parse(payload.body);

  if (payloadData.senderName === 'designdocument@gmail.com') {
    setAdminChats((prevChats) => [...prevChats, payloadData]);
  } else {
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);

      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  }
};

  const sendPrivateValue = () => {
    if (stompClient) {
      const receiverEmail = 'designdocument@gmail.com'; // Hardcoded receiver email
      const selectedUser = tab;
      
      let chatMessage = {
        senderName: userData.email,
        receiverName: selectedUser,
        message: userData.message,
        status: 'MESSAGE',
      };

      if (userData.email !== receiverEmail) {
        privateChats.get(receiverEmail).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }

      stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
      console.log("Kullaniciya mesaj")
      setUserData({ ...userData, message: '' });
    }
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };

  const registerUser = () => {
    connect();
    setTab('ADMIN'); // Connect to the admin tab by default
  };

  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.email,
        message: userData.message,
        status: 'MESSAGE',
      };
      console.log(chatMessage);
      stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: '' });
    }
  };

  useEffect(() => {
    const claims = TokenManager.getClaims(); // Assuming you have a TokenManager or a method to get claims
    if (claims && claims.email) {
      setUserData({ ...userData, email: claims.email });
    }
  }, []);

  const onAdminMessageReceived = (payload) => { //new added
    let payloadData = JSON.parse(payload.body);
    if (adminChats) {
      setAdminChats([...adminChats, payloadData]);
    } else {
      setAdminChats([payloadData]);
    }
  };

// // Modify the sendAdminValue function
// const sendAdminValue = () => {
//   if (stompClient) {
//     const adminEmail = 'designdocument@gmail.com';
//     let chatMessage = {
//       senderName: userData.email,
//       receiverName: adminEmail, // Set the receiver directly to admin's email
//       message: userData.message,
//       status: 'MESSAGE',
//     };

//     setAdminChats((prevChats) => [...prevChats, chatMessage]);

//     stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
//     console.log("Admine mesaj")
//     setUserData({ ...userData, message: '' });
//   }
// };

const sendAdminValue = () => {
  if (stompClient) {
    const adminEmail = 'designdocument@gmail.com';
    let chatMessage = {
      senderName: userData.email,
      receiverName: adminEmail,
      message: userData.message,
      status: 'MESSAGE',
    };

    setAdminChats((prevChats) => {
      const newChats = prevChats ? [...prevChats, chatMessage] : [chatMessage];
      return newChats;
    });

    stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
    console.log("Admine mesaj");
    setUserData({ ...userData, message: '' });
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
            <li onClick={() => setTab('CHATROOM')} className={`member ${tab === 'CHATROOM' && 'active'}`}>
              Chatroom
            </li>
            {userData.email === 'designdocument@gmail.com' ? null : (
              <li onClick={() => setTab('ADMIN')} className={`member ${tab === 'ADMIN' && 'active'}`}>
                Admin
              </li>
            )}
            {[...privateChats.keys()]
              .filter(name => name !== userData.email)
              .map((name, index) => (
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

        <div className="chat-content">
          {tab === 'ADMIN' ? (
            <ul className="chat-messages">
              {Array.isArray(adminChats) && adminChats.map((chat, index) => (
                <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
                  {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
                  <div className="message-data">{chat.message}</div>
                  {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="chat-messages">
              {Array.isArray(privateChats.get(tab)) &&
                privateChats.get(tab).map((chat, index) => (
                  <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
                    {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
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

  // return (
  //   <div style={containerStyle} className="container">
  //     {userData.connected ? (
  //       <div className="chat-box">
  //         <div className="user-info">
  //           <p>Your Email: {userData.email}</p>
  //         </div>
  //         <div className="member-list">
  //           <ul>
  //             <li onClick={() => setTab('CHATROOM')} className={`member ${tab === 'CHATROOM' && 'active'}`}>
  //               Chatroom
  //             </li>
  //             {userData.email === 'designdocument@gmail.com' ? null : (
  //               <li onClick={() => setTab('ADMIN')} className={`member ${tab === 'ADMIN' && 'active'}`}>
  //                 Admin
  //               </li>
  //             )}
  //             {[...privateChats.keys()]
  //               .filter(name => name !== userData.email) // Exclude the current user's email
  //               .map((name, index) => (
  //                 <li
  //                   onClick={() => setTab(name)}
  //                   className={`member ${tab === name && 'active'}`}
  //                   key={index}
  //                 >
  //                   {name}
  //                 </li>
  //               ))}
  //           </ul>
  //         </div>
  
  //         <div className="chat-content">
  //           {tab === 'ADMIN' ? (
  //             <ul className="chat-messages">
  //               {adminChats.map((chat, index) => (
  //                 <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
  //                   {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
  //                   <div className="message-data">{chat.message}</div>
  //                   {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
  //                 </li>
  //               ))}
  //             </ul>
  //           ) : (
  //             <ul className="chat-messages">
  //               {Array.isArray(privateChats.get(tab)) &&
  //                 privateChats.get(tab).map((chat, index) => (
  //                   <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
  //                     {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
  //                     <div className="message-data">{chat.message}</div>
  //                     {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
  //                   </li>
  //                 ))}
  //             </ul>
  //           )}
  //           <div className="send-message">
  //             <input
  //               type="text"
  //               className="input-message"
  //               placeholder="enter the message"
  //               value={userData.message}
  //               onChange={handleMessage}
  //             />
  //             <button
  //               type="button"
  //               className="send-button"
  //               onClick={tab === 'ADMIN' ? sendAdminValue : sendPrivateValue}
  //               // onClick={tab === 'ADMIN' ? sendAdminValue : sendPrivateValue
  //             >
  //               Send
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className="register">
  //         <button type="button" onClick={registerUser}>
  //           Connect
  //         </button>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default ChatRoom;


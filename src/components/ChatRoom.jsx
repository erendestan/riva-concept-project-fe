// import React, { useEffect, useState } from 'react';
// import SockJS from 'sockjs-client/dist/sockjs.min.js';
// import Stomp from 'stompjs';
// import '../styling/chatroom-style.css';
// import TokenManager from '../api/TokenManager';

// var stompClient = null;

// const ChatRoom = () => {
//   const [privateChats, setPrivateChats] = useState(new Map());
//   // const [publicChats, setPublicChats] = useState([]);
//   const [adminChats, setAdminChats] = useState([]); //new added
//   const [userData, setUserData] = useState({
//     email: '',
//     connected: false,
//     message: '',
//   });
//   const [tab, setTab] = useState('CHATROOM');

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   const containerStyle = {
//     maxHeight: '500px',
//     overflowY: 'auto',
//     marginTop: '70px',
//     marginBottom: '20px',
//   };

//   const connect = () => {
//     let Sock = new SockJS('http://localhost:8080/ws');
//     stompClient = Stomp.over(Sock);
//     stompClient.connect({}, onConnected, onError);
//   };

//   const onConnected = () => {
//     setUserData({ ...userData, connected: true });
//     // stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
//     stompClient.subscribe('/user/' + userData.email + '/private', onPrivateMessageReceived);
    
//     stompClient.subscribe('/chatroom/admin', onAdminMessageReceived); //new added
//     // stompClient.subscribe('/chatroom/admin', onPrivateMessageReceived)
//     userJoin();
//   };

//   const userJoin = () => {
//     var chatMessage = {
//       senderName: userData.email,
//       status: 'JOIN',
//     };
//     stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
//   };

//   // const handleValue = (event) => {
//   //   const { name, value } = event.target;
//   //   setUserData({ ...userData, [name]: value });
//   // };

//   const onError = (err) => {
//     console.log(err);
//   };

//   // const onPublicMessageReceived = (payload) => {
//   //   let payloadData = JSON.parse(payload.body);
//   //   switch (payloadData.status) {
//   //     case 'JOIN':
//   //       if (!privateChats.get(payloadData.senderName)) {
//   //         privateChats.set(payloadData.senderName, []);
//   //         setPrivateChats(new Map(privateChats));
//   //       }
//   //       break;
//   //     case 'MESSAGE':
//   //       publicChats.push(payloadData);
//   //       setPublicChats([...publicChats]);
//   //       break;
//   //   }
//   // };

//   // const onPrivateMessageReceived = (payload) => {
//   //   let payloadData = JSON.parse(payload.body);
//   //   if (privateChats.get(payloadData.senderName)) {
//   //     privateChats.get(payloadData.senderName).push(payloadData);
//   //     setPrivateChats(new Map(privateChats));
//   //   } else {
//   //     let list = [];
//   //     list.push(payloadData);

//   //     privateChats.set(payloadData.senderName, list);
//   //     setPrivateChats(new Map(privateChats));
//   //   }
//   // };

 
// // Update the onPrivateMessageReceived function
// // const onPrivateMessageReceived = (payload) => {
// //   let payloadData = JSON.parse(payload.body);

// //   if (payloadData.senderName === 'designdocument@gmail.com') {
// //     setAdminChats((prevChats) => [...prevChats, payloadData]);
// //   } else {
// //     if (privateChats.get(payloadData.senderName)) {
// //       privateChats.get(payloadData.senderName).push(payloadData);
// //       setPrivateChats(new Map(privateChats));
// //     } else {
// //       let list = [];
// //       list.push(payloadData);

// //       privateChats.set(payloadData.senderName, list);
// //       setPrivateChats(new Map(privateChats));
// //     }
// //   }
// // };

// const onPrivateMessageReceived = (payload) => {
//   let payloadData = JSON.parse(payload.body);

//   if (payloadData.senderName === 'designdocument@gmail.com') {
//     // If the sender is the admin, update the adminChats state
//     setAdminChats((prevChats) => [...prevChats, payloadData]);
//   } else {
//     // If the sender is not the admin, update the privateChats state
//     if (privateChats.get(payloadData.senderName)) {
//       privateChats.get(payloadData.senderName).push(payloadData);
//       setPrivateChats(new Map(privateChats));
//     } else {
//       let list = [];
//       list.push(payloadData);

//       privateChats.set(payloadData.senderName, list);
//       setPrivateChats(new Map(privateChats));

//       // Create a tab for the new user
//       setTab(payloadData.senderName);
//     }
//   }
// };
// // const onPrivateMessageReceived = (payload) => {
// //   let payloadData = JSON.parse(payload.body);

// //   if (payloadData.senderName === 'designdocument@gmail.com') {
// //     // If the sender is the admin, update the adminChats state
// //     setAdminChats((prevChats) => [...prevChats, payloadData]);
// //   } else {
// //     // If the sender is not the admin, update the privateChats state
// //     if (privateChats.get(payloadData.senderName)) {
// //       privateChats.get(payloadData.senderName).push(payloadData);
// //       setPrivateChats(new Map(privateChats));
// //     } else {
// //       let list = [];
// //       list.push(payloadData);

// //       privateChats.set(payloadData.senderName, list);
// //       setPrivateChats(new Map(privateChats));

// //       // Create a tab for the new user
// //       setTab(payloadData.senderName);
// //     }
// //   }
// // };

// // // Update the onPrivateMessageReceived function
// // const onPrivateMessageReceived = (payload) => {
// //   let payloadData = JSON.parse(payload.body);

// //   if (payloadData.senderName === 'designdocument@gmail.com') {
// //     setAdminChats((prevChats) => [...prevChats, payloadData]);
// //   } else {
// //     if (privateChats.get(payloadData.senderName)) {
// //       privateChats.get(payloadData.senderName).push(payloadData);
// //       setPrivateChats(new Map(privateChats));
// //     } else {
// //       let list = [];
// //       list.push(payloadData);

// //       privateChats.set(payloadData.senderName, list);
// //       setPrivateChats(new Map(privateChats));
// //     }
// //   }
// // };

//   const sendPrivateValue = () => {
//     if (stompClient) {
//       const receiverEmail = 'designdocument@gmail.com'; // Hardcoded receiver email
//       const selectedUser = tab;
      
//       let chatMessage = {
//         senderName: userData.email,
//         receiverName: selectedUser,
//         message: userData.message,
//         status: 'MESSAGE',
//       };

//       if (userData.email !== receiverEmail) {
//         privateChats.get(receiverEmail).push(chatMessage);
//         setPrivateChats(new Map(privateChats));
//       }

//       stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
//       console.log("Sending message to customer from admin")
//       setUserData({ ...userData, message: '' });
//     }
//   };

//   const sendAdminValue = () => {
//     if (stompClient) {
//       const adminEmail = 'designdocument@gmail.com';
//       let chatMessage = {
//         senderName: userData.email,
//         receiverName: adminEmail,
//         message: userData.message,
//         status: 'MESSAGE',
//       };
  
//       //Try to do the one on the customer with map(setPrivateChats)
//       setAdminChats((prevChats) => {
//         const newChats = prevChats ? [...prevChats, chatMessage] : [chatMessage];
//         return newChats;
//       });
  
//       stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
//       console.log("Sending message to admin from customer");
//       setUserData({ ...userData, message: '' });
//     }
//   };

//   // const sendAdminValue = () => {
//   //   if (stompClient) {
//   //     // const adminEmail = 'designdocument@gmail.com';
//   //     const receiverEmail = tab === 'ADMIN' ? 'designdocument@gmail.com' : tab; // Set the receiver dynamically based on the selected tab
  
//   //     let chatMessage = {
//   //       senderName: userData.email,
//   //       receiverName: receiverEmail,
//   //       message: userData.message,
//   //       status: 'MESSAGE',
//   //     };
  
//   //     // Update the adminChats state
//   //     setAdminChats((prevChats) => {
//   //       const newChats = prevChats ? [...prevChats, chatMessage] : [chatMessage];
//   //       return newChats;
//   //     });
  
//   //     // Send the message to the selected user
//   //     stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
//   //     console.log("Sending message from user to admin:", chatMessage);
  
//   //     // Clear the input field
//   //     setUserData({ ...userData, message: '' });
//   //   }
//   // };

//   const handleMessage = (event) => {
//     const { value } = event.target;
//     setUserData({ ...userData, message: value });
//   };

//   const registerUser = () => {
//     connect();
//     setTab('ADMIN'); // Connect to the admin tab by default
//   };

//   // const sendValue = () => {
//   //   if (stompClient) {
//   //     var chatMessage = {
//   //       senderName: userData.email,
//   //       message: userData.message,
//   //       status: 'MESSAGE',
//   //     };
//   //     console.log(chatMessage);
//   //     stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
//   //     setUserData({ ...userData, message: '' });
//   //   }
//   // };

//   useEffect(() => {
//     const claims = TokenManager.getClaims(); // Assuming you have a TokenManager or a method to get claims
//     if (claims && claims.email) {
//       setUserData({ ...userData, email: claims.email });
//     }
//   }, []);

//   const onAdminMessageReceived = (payload) => { //new added
//     let payloadData = JSON.parse(payload.body);
//     if (adminChats) {
//       setAdminChats([...adminChats, payloadData]);
//     } else {
//       setAdminChats([payloadData]);
//     }
//   };

// // // Modify the sendAdminValue function
// // const sendAdminValue = () => {
// //   if (stompClient) {
// //     const adminEmail = 'designdocument@gmail.com';
// //     let chatMessage = {
// //       senderName: userData.email,
// //       receiverName: adminEmail, // Set the receiver directly to admin's email
// //       message: userData.message,
// //       status: 'MESSAGE',
// //     };

// //     setAdminChats((prevChats) => [...prevChats, chatMessage]);

// //     stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
// //     console.log("Admine mesaj")
// //     setUserData({ ...userData, message: '' });
// //   }
// // };

// return (
//   <div style={containerStyle} className="container">
//     {userData.connected ? (
//       <div className="chat-box">
//         <div className="user-info">
//           <p>Your Email: {userData.email}</p>
//         </div>
//         <div className="member-list">
//           <ul>
//             {userData.email === 'designdocument@gmail.com' ? null : (
//               <li onClick={() => setTab('ADMIN')} className={`member ${tab === 'ADMIN' && 'active'}`}>
//                 Admin
//               </li>
//             )}
//             {[...privateChats.keys()]
//               .filter(name => name !== userData.email)
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
//           <ul className="chat-messages">
//             {Array.isArray(adminChats) && adminChats.map((chat, index) => (
//               <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
//                 {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
//                 <div className="message-data">{chat.message}</div>
//                 {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
//               </li>
//             ))}
//           </ul>
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
//               onClick={sendAdminValue}
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

// // return (
// //   <div style={containerStyle} className="container">
// //     {userData.connected ? (
// //       <div className="chat-box">
// //         <div className="user-info">
// //           <p>Your Email: {userData.email}</p>
// //         </div>
// //         <div className="member-list">
// //           <ul>
// //             <li onClick={() => setTab('CHATROOM')} className={`member ${tab === 'CHATROOM' && 'active'}`}>
// //               Chatroom
// //             </li>
// //             {userData.email === 'designdocument@gmail.com' ? null : (
// //               <li onClick={() => setTab('ADMIN')} className={`member ${tab === 'ADMIN' && 'active'}`}>
// //                 Admin
// //               </li>
// //             )}
// //             {[...privateChats.keys()]
// //               .filter(name => name !== userData.email)
// //               .map((name, index) => (
// //                 <li
// //                   onClick={() => setTab(name)}
// //                   className={`member ${tab === name && 'active'}`}
// //                   key={index}
// //                 >
// //                   {name}
// //                 </li>
// //               ))}
// //           </ul>
// //         </div>

// //         <div className="chat-content">
// //           {tab === 'ADMIN' ? (
// //             <ul className="chat-messages">
// //               {Array.isArray(adminChats) && adminChats.map((chat, index) => (
// //                 <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
// //                   {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
// //                   <div className="message-data">{chat.message}</div>
// //                   {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <ul className="chat-messages">
// //               {Array.isArray(privateChats.get(tab)) &&
// //                 privateChats.get(tab).map((chat, index) => (
// //                   <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
// //                     {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
// //                     <div className="message-data">{chat.message}</div>
// //                     {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
// //                   </li>
// //                 ))}
// //             </ul>
// //           )}
// //           <div className="send-message">
// //             <input
// //               type="text"
// //               className="input-message"
// //               placeholder="enter the message"
// //               value={userData.message}
// //               onChange={handleMessage}
// //             />
// //             <button
// //               type="button"
// //               className="send-button"
// //               onClick={tab === 'ADMIN' ? sendAdminValue : sendPrivateValue}
// //             >
// //               Send
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     ) : (
// //       <div className="register">
// //         <button type="button" onClick={registerUser}>
// //           Connect
// //         </button>
// //       </div>
// //     )}
// //   </div>
// // );

//   // return (
//   //   <div style={containerStyle} className="container">
//   //     {userData.connected ? (
//   //       <div className="chat-box">
//   //         <div className="user-info">
//   //           <p>Your Email: {userData.email}</p>
//   //         </div>
//   //         <div className="member-list">
//   //           <ul>
//   //             <li onClick={() => setTab('CHATROOM')} className={`member ${tab === 'CHATROOM' && 'active'}`}>
//   //               Chatroom
//   //             </li>
//   //             {userData.email === 'designdocument@gmail.com' ? null : (
//   //               <li onClick={() => setTab('ADMIN')} className={`member ${tab === 'ADMIN' && 'active'}`}>
//   //                 Admin
//   //               </li>
//   //             )}
//   //             {[...privateChats.keys()]
//   //               .filter(name => name !== userData.email) // Exclude the current user's email
//   //               .map((name, index) => (
//   //                 <li
//   //                   onClick={() => setTab(name)}
//   //                   className={`member ${tab === name && 'active'}`}
//   //                   key={index}
//   //                 >
//   //                   {name}
//   //                 </li>
//   //               ))}
//   //           </ul>
//   //         </div>
  
//   //         <div className="chat-content">
//   //           {tab === 'ADMIN' ? (
//   //             <ul className="chat-messages">
//   //               {adminChats.map((chat, index) => (
//   //                 <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
//   //                   {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
//   //                   <div className="message-data">{chat.message}</div>
//   //                   {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
//   //                 </li>
//   //               ))}
//   //             </ul>
//   //           ) : (
//   //             <ul className="chat-messages">
//   //               {Array.isArray(privateChats.get(tab)) &&
//   //                 privateChats.get(tab).map((chat, index) => (
//   //                   <li className={`message ${chat.senderName === userData.email && 'self'}`} key={index}>
//   //                     {chat.senderName !== userData.email && <div className="avatar">{chat.senderName}</div>}
//   //                     <div className="message-data">{chat.message}</div>
//   //                     {chat.senderName === userData.email && <div className="avatar self">{chat.senderName}</div>}
//   //                   </li>
//   //                 ))}
//   //             </ul>
//   //           )}
//   //           <div className="send-message">
//   //             <input
//   //               type="text"
//   //               className="input-message"
//   //               placeholder="enter the message"
//   //               value={userData.message}
//   //               onChange={handleMessage}
//   //             />
//   //             <button
//   //               type="button"
//   //               className="send-button"
//   //               onClick={tab === 'ADMIN' ? sendAdminValue : sendPrivateValue}
//   //               // onClick={tab === 'ADMIN' ? sendAdminValue : sendPrivateValue
//   //             >
//   //               Send
//   //             </button>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     ) : (
//   //       <div className="register">
//   //         <button type="button" onClick={registerUser}>
//   //           Connect
//   //         </button>
//   //       </div>
//   //     )}
//   //   </div>
//   // );
// }

// export default ChatRoom;

import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import Stomp from 'stompjs';
import '../styling/chatroom-style.css';
import TokenManager from '../api/TokenManager';
import ChatMessageAPI from '../api/ChatMessageAPI';

var stompClient = null;

const ChatRoom = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [adminChats, setAdminChats] = useState(); //new added
  const [userData, setUserData] = useState({
    email: '',
    connected: false,
    message: '',
  });
  const [tab, setTab] = useState('ADMIN');
  const [chatHistory, setChatHistory] = useState([]);

  // useEffect(() => {
    
  // }, []); // Empty dependency array ensures the effect runs only once when the component mounts

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
    // stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
    stompClient.subscribe('/user/' + userData.email + '/private', onPrivateMessageReceived);
    
    stompClient.subscribe('/chatroom/admin', onAdminMessageReceived); //new added
    stompClient.subscribe('/chatroom/admin', onPrivateMessageReceived)
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

// When Admin receives message from user this getting triggered
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
  
      //Try to do the one on the customer with map(setPrivateChats)
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

  const registerUser = () => {
    connect();
    setTab('ADMIN'); // Connect to the admin tab by default

    const fetchChatHistory = async () => {
      try {
        const claims = TokenManager.getClaims();
        if (claims && claims.email) {
          // Use the logged-in user's email to fetch chat history
          const history = await ChatMessageAPI.getChatHistory(claims.email);

          // Update the state with the fetched chat history
          setChatHistory(history);
          console.log(history)
        }
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };

    // Fetch chat history when the component mounts
    fetchChatHistory();

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

return (
  <div style={containerStyle} className="container">
    {userData.connected ? (
      <div className="chat-box">
        <div className="user-info">
          <p>Your Email: {userData.email}</p>
        </div>
        <div className="member-list">
          <ul>
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


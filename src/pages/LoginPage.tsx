import React, { useEffect, useState } from "react";
import NavbarRiva from "../components/Navbar";
import LogIn from "../components/LogIn";
import UserAPI from "../api/UserApi";
import AuthAPI from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";

export default function LogInPage(props) {
  //   const{setLoginId} = props;

  //   const[userItems, SetUserItems] = useState([])

  //   useEffect(() => {
  //     refreshList();
  //   }, []);

  // const refreshList = () =>{
  //   UserAPI.getAllUsers()
  //   .then(data => SetUserItems(data))
  //   .catch(error => console.log(error));
  // }
  return (
    <div>
      <LogIn />
    </div>
  );
}

// export default LogInPage;

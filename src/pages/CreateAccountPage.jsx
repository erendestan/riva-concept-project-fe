import React, { useState } from 'react'
import NavbarRiva from "../components/Navbar";
// import LogIn from "../components/LogIn";
// import axios from 'axios';
// import UserList from '../components/UserList';
import CreateAccount from '../components/CreateAccount';

const CreateAccountPage = () => {

  return (
    <>
    <NavbarRiva></NavbarRiva>
    <CreateAccount></CreateAccount>
    </>
  )
}

export default CreateAccountPage
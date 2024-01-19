import React, { useEffect, useState } from "react";
import NavbarRiva from "../components/Navbar";
import LogIn from "../components/LogIn";
import UserAPI from "../api/UserApi";
import AuthAPI from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";

export default function LogInPage(props) {
  return (
    <div>
      <LogIn />
    </div>
  );
}

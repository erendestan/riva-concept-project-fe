import React, { useEffect, useState } from 'react'
import ReservationCalendar from "../components/ReservationCalendar";
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import UserAPI from '../api/UserApi';

export default function ReservationPage(props){
  const navigate = useNavigate();
  const [isDataReady, setIsDataReady] = useState(false);
  const[userItems, SetUserItems] = useState([]);
  const [doesHaveRole, setHasRole] = useState(false);

  const navigateToMainPage = () => {
    navigate("/")
  };

  const refreshList = () =>{
    UserAPI.getAllUsers()
    .then(data => {SetUserItems(data); console.log(data)})
    .catch(error => console.log(error));

    useEffect(() => {
      // Check if the user has the ADMIN role
      const claims = TokenManager.getClaims();
      if (claims && claims.roles && claims.roles.includes('ADMIN') || ('CUSTOMER')) {
        setHasRole(true);
        refreshList();
      }else {
        toast.error('Access Denied!');
        navigateToMainPage();
      }
      
    }, [navigate]);
}

    return (
        <div className="container">
          {<ReservationCalendar users={userItems}/>}
        </div>
      );
}
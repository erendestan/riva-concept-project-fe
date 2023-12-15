import React, { useEffect, useState } from 'react';
import ReservationCalendar from "../components/ReservationCalendar";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UserAPI from '../api/UserApi';
import TokenManager from '../api/TokenManager';
import ReservationDetailsForm from '../components/ReservationDetailsForm';

export default function ReservationPage(props) {
  const navigate = useNavigate();
  const [userItems, setUserItems] = useState([]);
  const [isWorker, setIsWorker] = useState(false);

  const navigateToMainPage = () => {
    navigate("/");
  };

  const refreshList = () => {
    UserAPI.getAllUsers()
      .then(data => {
        setUserItems(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    // Check if the user has the WORKER role
    const claims = TokenManager.getClaims();
    if (claims && claims.roles && claims.roles.includes('WORKER')) {
      setIsWorker(true);
      toast.error('Access Denied!');
      navigateToMainPage();
    } else {
      // If the user is not a worker, refresh the list
      refreshList();
    }
  }, [navigate]); // Dependency array should include dependencies for useEffect

  if (isWorker) {
    return null;
  } else {
    return (
      <div className="container">
        {<ReservationCalendar userItems={userItems} />}
        {/* {<ReservationDetailsForm userItems={userItems}/>} */}
      </div>
    );
  }
}

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TokenManager from '../api/TokenManager';
import UserProfile from '../components/UserProfile';
import {toast} from 'react-hot-toast';

export default function UserProfilePage(props){
    const navigate = useNavigate();
    const [isWorker, setIsWorker] = useState(false);

    const containerStyle = {
        marginTop: '80px',
        marginBottom: '20px'
      };

      const navigateToMainPage = () => {
        navigate("/")
      };

      useEffect(() => {
        // Check if the user has the ADMIN role
        const claims = TokenManager.getClaims();
        if (claims && claims.roles && claims.roles.includes('WORKER')) {
          setIsWorker(true);
          toast.error('Access Denied!');
          navigateToMainPage();
        }   
      }, [navigate]);

      if(isWorker){
        return null;
      }
      else{
        return(
            <div className="container mt-4">
                <h1 style={containerStyle} className="text-center">User Profile</h1>
                <UserProfile/>
            </div>
            
        )
      }

    
}
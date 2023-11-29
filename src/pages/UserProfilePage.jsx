import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserAPI from '../api/UserApi';
import TokenManager from '../api/TokenManager';
import { user } from '@nextui-org/react';
import UserProfile from '../components/UserProfile';

export default function UserProfilePage(props){
    const containerStyle = {
        marginTop: '80px',
        marginBottom: '20px'
      };

    return(
        <div className="container mt-4">
            <h1 style={containerStyle} className="text-center">User Profile</h1>
            <UserProfile/>
        </div>
        
    )
}
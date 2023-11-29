import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import UserAPI from '../api/UserApi';
import TokenManager from '../api/TokenManager';

export default function UserProfile(props) {
    const userId = TokenManager.getClaims()?.userId;
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
              const user = await UserAPI.getUserById(userId);
              setUserData(user);
            } catch (error) {
              console.error('Error fetching user details:', error);
            } finally {
              setLoading(false);
            }
        };

        fetchUserDetails();
    }, [userId]);

    if(loading){
        return<p>Loading...</p>
    }

    return(
        // <div>
        //     <p>First Name: {userData.firstName}</p>
        //     <p>Last Name: {userData.lastName}</p>
        // </div>

        <div className="mt-3">
        <table className="table table-striped mt-3">
        <thead className="sticky-top">
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            <td>
                {userData.firstName}
            </td>
            <td>
                {userData.lastName}
            </td>
            <td>
                {userData.email}
            </td>
            <td>
                {userData.phoneNumber}
            </td>
            
            
            
        </tbody>
        </table>
        </div>
    )
}
  
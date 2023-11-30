import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList'
import { useNavigate } from 'react-router-dom'
import Filter from '../components/Filter'
import UserAPI from '../api/UserApi'
import SearchComponent from '../components/Search'
import TokenManager from '../api/TokenManager'
import {toast} from 'react-hot-toast';

export default function AdminUserPanelPage(props){
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true);
    const [isDataReady, setIsDataReady] = useState(false);

    const [filteredUsers, setFilteredUsers] = useState([]);

    const[userItems, SetUserItems] = useState([]);

    const [isAdmin, setIsAdmin] = useState(false);

    const navigateToAddUserPage = () => {
        navigate('/addUser')
    };

    const navigateToMainPage = () => {
      navigate("/")
    };

    
    useEffect(() => {
      // Check if the user has the ADMIN role
      const claims = TokenManager.getClaims();
      if (claims && claims.roles && claims.roles.includes('ADMIN')) {
        setIsAdmin(true);
        refreshList();
      }else {
        toast.error('Access Denied!');
        navigateToMainPage();
      }
      
    }, [navigate]);

    const refreshList = () =>{
        UserAPI.getAllUsers()
        .then(data => {SetUserItems(data); console.log(data)})
        .catch(error => console.log(error));
    }

    const setSearchedUsers = (searchedUsers) => {
      setFilteredUsers(searchedUsers)
    }

    if(!isAdmin){
      return null;
    }

    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-6 mt-2">
              <SearchComponent userItems={userItems} setSearchedUsers={setSearchedUsers} setIsDataReady={setIsDataReady}/>
          </div>
          <div className="col-md-6 mt-2">
              <Filter setIsActive={setIsActive} />
          </div>
        </div>
        <UserList userItems={isDataReady === true ? filteredUsers : userItems} isActive={isActive} refreshList = {refreshList}/>
        <div className="row">
          <div className="col-md-6 mt-3">
            <button className='btn btn-success' style={isActive === false ? { display: 'none' } : { display: 'block' }} onClick={navigateToAddUserPage}>+ Add User</button>
          </div>
        </div>
      </div>
    )

}
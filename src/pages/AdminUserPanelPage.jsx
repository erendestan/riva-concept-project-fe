import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList'
import { useNavigate } from 'react-router-dom'
import Filter from '../components/Filter'
import UserAPI from '../api/UserApi'
import SearchComponent from '../components/Search'

export default function AdminUserPanelPage(props){
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true);
    const [isDataReady, setIsDataReady] = useState(false);

    const navigateToAddUserPage = () => {
        navigate('/addUser')
    };

    const [filteredUsers, setFilteredUsers] = useState([]);

    const[userItems, SetUserItems] = useState([]);

    

    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () =>{
        UserAPI.getAllUsers()
        .then(data => SetUserItems(data))
        .catch(error => console.log(error));
    }

    const setSearchedUsers = (searchedUsers) => {
      setFilteredUsers(searchedUsers)
    }

    return (
      <div className='container'>
        <div className="row">
          {/* <div className="col-md-6 mt-2">
            <Search employeeItems={employeeItems} setSearchedEmployees={setSearchedEmployees} setIsDataReady={setIsDataReady} />
          </div> */}
          {/* <Search userItems={userItems} setSearchedUsers={setSearchedUsers}/> */}
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
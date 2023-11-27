import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList'
import { useNavigate } from 'react-router-dom'
import Filter from '../components/Filter'
import UserAPI from '../api/UserApi'

export default function AdminUserPanelPage(props){
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true);

    const navigateToAddUserPage = () => {
        navigate('/addUser')
    };

    const[userItems, SetUserItems] = useState([])

    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () =>{
        UserAPI.getAllUsers()
        .then(data => SetUserItems(data))
        .catch(error => console.log(error));
    }

    return (
      <div className='container'>
        <div className="row">
          {/* <div className="col-md-6 mt-2">
            <Search employeeItems={employeeItems} setSearchedEmployees={setSearchedEmployees} setIsDataReady={setIsDataReady} />
          </div> */}
          <div className="col-md-6 mt-2">
            <Filter setIsActive={setIsActive} />
          </div>
        </div>
        <UserList isActive={isActive} refreshList = {refreshList} userItems={userItems}/>
        <div className="row">
          <div className="col-md-6 mt-3">
            <button className='btn btn-success' style={isActive === false ? { display: 'none' } : { display: 'block' }} onClick={navigateToAddUserPage}>+ Add User</button>
          </div>
        </div>
      </div>
    )

}
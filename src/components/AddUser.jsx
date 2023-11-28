import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserAPI from '../api/UserApi';
import {toast} from 'react-hot-toast';

export default function AddUser(props){
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: '',
        isActive: true
    });

    const handleAddUser =(e) =>{
        e.preventDefault();

        if(
            !user.firstName ||
            !user.lastName ||
            !user.email ||
            !user.password ||
            !user.role
        ){
            toast.error("Please fill in all required fields.");
        } else{
            UserAPI.postUser(user)
            .then(response =>{
              toast.success("Added Succesful");
                navigate('/adminuserpanel')
            })
            .catch(error => {
              toast.error("Failed to add user.")})
        }
    }

    return(
        <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">

            {/*Form*/}
            <form>
              <div className="form-group mb-2">
                <label htmlFor="firstName">First name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter user's first name"
                  value={user.firstName}
                  onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                />
              </div>
    
              <div className="form-group mb-2">
                <label htmlFor="lastName">Last name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter user's last name"
                  value={user.lastName}
                  onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                />
              </div>
    
              <div className="form-group mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder= "Enter user's email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phonenumber"
                  placeholder= "Enter user's phone number"
                  value={user.phoneNumber}
                  onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                />
              </div>
    
              <div className="form-group mb-2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter user's password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
              </div>
    
              <div className="form-group mb-3">
                <label htmlFor="role">Select your role:</label>
                <select
                  className="form-control"
                  id="role"
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                  <option value="">Select...</option>
                  <option value="ADMIN">Admin</option>
                  <option value="CUSTOMER">Customer</option>
                  <option value="WORKER">Worker</option>
                </select>
              </div>
    
              <button type="button" className="btn btn-primary" onClick={handleAddUser}>
                Add User
              </button>
            </form>
            {/*Form*/}

          </div>
        </div>
      </div>
    )
}
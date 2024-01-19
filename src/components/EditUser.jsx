import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserAPI from '../api/UserApi';
import {toast} from 'react-hot-toast';
import TokenManager from '../api/TokenManager'

export default function EditUser(props){
    const navigate = useNavigate();
    const {userId} = props;
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        getInfo()
    },[props.userId])

    const getInfo = () => {
      const claims = TokenManager.getClaims();
    
      if (claims && claims.roles && claims.roles.includes('ADMIN')) {
        setIsAdmin(true);
      }
    
      if (claims && (claims.userId == userId || claims.roles.includes('ADMIN'))) {
        UserAPI.getUserById(userId)
          .then(data => {
            setUser({
              id: data.id,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phoneNumber: data.phoneNumber,
              password: data.password,
              role: data.role,
              active: data.active
            });
          })
          .catch(error => {
            // Handle error (e.g., show toast message)
            toast.error("Failed to fetch user details.");
          });
      } else {
        // User is trying to edit someone else's details without proper authorization
        toast.error("Access Denied: You are not authorized to edit this user.");
        // Redirect to own edit page
        navigate(`/editUser/${claims.userId}`);
      }
    };

    // Use the found user or default values in the useState hook
    const [user, setUser] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: '',
        active: ''
    });

    const handleEditUser = (e) => {
        e.preventDefault();
        if(
          user.firstName === '' ||
          user.lastName === '' ||
          user.email === '' ||
          user.phoneNumber === '' ||
          user.password === '' ||
          user.role === ''
      ){
          toast.error("Please fill in all required fields.");
      } else {
          UserAPI.updateUser(user)
          .then(response => {
              toast.success("Updated Succesful");
              if(isAdmin){
                navigate('/adminuserpanel')
              }
              else{
                navigate('/userProfile')
              }
              
          })
          .catch(error => {toast.error("Failed to update user.")})
      }
    }

    const containerStyle = {
      overflowY: 'auto',
      marginTop: '100px',
      marginBottom: '20px'
    };

    return(
      <div style={containerStyle} className="container">
          
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Edit User</h1>
          <form>
            <div className="form-group mb-2">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter user's first name"
                value={user.firstName}
                onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                }
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
                onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                }
              />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter user's email"
                value={user.email}
                onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                }
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
            {isAdmin && (
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
            )}        
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEditUser}

            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}
import React from 'react'
import AddUser from '../components/AddUser'

export default function AddUserPage(props){

    const containerStyle = {
        marginTop: '80px',
        marginBottom: '20px'
      };

    return(
        <div className="container mt-4">
            <h1 style={containerStyle} className="text-center">Add User</h1>
            <AddUser/>
        </div>
    )
}
import React from 'react'
import { useParams } from 'react-router-dom'
import EditUser from '../components/EditUser';

export default function EditUserPage() {
    const {id} = useParams();

    return(
        <div className="container mt-4">
      <h1 className="text-center">Edit User</h1>
      <EditUser userId ={id}/>
    </div>
    )
}
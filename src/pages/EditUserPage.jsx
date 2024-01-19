import React from 'react'
import { useParams } from 'react-router-dom'
import EditUser from '../components/EditUser';

export default function EditUserPage() {
    const {id} = useParams();

    return(
    <>
      <EditUser userId ={id}/>
    </>
    )
}
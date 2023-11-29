import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavbarRiva from './components/Navbar'
import HomePage from './pages/HomePage'
import CreateAccountPage from './pages/CreateAccountPage';
import LogInPage from './pages/LoginPage';
import AdminUserPanel from './pages/AdminUserPanelPage';
import AdminUserPanelPage from './pages/AdminUserPanelPage';
import AddUserPage from './pages/AddUserPage';
import { Toaster } from 'react-hot-toast';
import UserProfilePage from './pages/UserProfilePage';
import EditUserPage from './pages/EditUserPage';

const App = () => {
  return (
    <div className='App'>
      <Toaster toastOptions={{
        style:{
          background: 'rgb(51 65 85)',
          color: '#fff'
        }
      }}/>

    <Router>
      <NavbarRiva/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LogInPage/>}/>
        <Route path="/createaccount" element={<CreateAccountPage/>}/>
        <Route path='/adminuserpanel' element={<AdminUserPanelPage/>}/>
        <Route path='/addUser' element={<AddUserPage/>}/>
        <Route path='/userProfile' element={<UserProfilePage/>}/>
        <Route path='/editUser/:id' element={<EditUserPage/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
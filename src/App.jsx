import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavbarRiva from './components/Navbar'
import HomePage from './pages/HomePage'
import CreateAccountPage from './pages/CreateAccountPage';
import LogInPage from './pages/LoginPage';
import AdminUserPanel from './pages/AdminUserPanelPage';
import AdminUserPanelPage from './pages/AdminUserPanelPage';
import AddUserPage from './pages/AddUserPage';

const App = () => {
  return (
    <div className='App'>
    <Router>
      <NavbarRiva/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LogInPage/>}/>
        <Route path="/createaccount" element={<CreateAccountPage/>}/>
        <Route path='/adminuserpanel' element={<AdminUserPanelPage/>}/>
        <Route path='/addUser' element={<AddUserPage/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
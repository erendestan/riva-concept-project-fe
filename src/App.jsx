import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavbarRiva from './components/Navbar'
import HomePage from './pages/HomePage'
import LogInPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

const App = () => {
  return (
    <div className='App'>
    <Router>
      <NavbarRiva/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LogInPage/>}/>
        <Route path="/createaccount" element={<CreateAccountPage/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
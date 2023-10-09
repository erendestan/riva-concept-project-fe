import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavbarRiva from './components/Navbar'
import Home from './pages/Home'
import LogIn from './components/LogIn';
import CreateAccount from './components/CreateAccount';

const App = () => {
  return (
    <div className='App'>
    <Router>
      <NavbarRiva/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/createaccount" element={<CreateAccount/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
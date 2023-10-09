import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavbarRiva from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='App'>
    <Router>
      <NavbarRiva/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
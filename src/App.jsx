import React from 'react'
import {Routes, Route} from "react-router-dom"
import Background from './components/Background'
import Carrousel from './components/Carrousel'
import NavbarRiva from './components/Navbar'
import AboutUs from './components/AboutUs'
// import Home from './pages/Home'
// import CreateAccountPage from './pages/CreateAccountPage'


const App = () => {
  return (
    <>
    {/* <Routes>
      <Route path='/' element={<App></App>}/>
      <Route path='/createaccount' element={<CreateAccountPage></CreateAccountPage>}/>
    </Routes> */}
    <NavbarRiva></NavbarRiva>
    <Background></Background>
    <AboutUs></AboutUs>
    <Carrousel></Carrousel>
    </>
  )
}

export default App
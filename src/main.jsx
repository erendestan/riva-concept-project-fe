import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreateAccountPage from './pages/CreateAccountPage.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter } from 'react-router-dom'
import path from 'path'
import { BrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "createaccount",
//     element: <CreateAccountPage/>,
//   }
  
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

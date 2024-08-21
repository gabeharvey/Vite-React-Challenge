import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from "../components/Navbar"
import Main from "../components/Main"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Main />
    {/* <App /> */}
  </StrictMode>,
)

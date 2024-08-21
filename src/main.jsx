import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Footer from "../components/Footer"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Main />
    <Footer />
    {/* <App /> */}
  </StrictMode>,
)

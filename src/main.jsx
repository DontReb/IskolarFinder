import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/App.css'
import './css/NavBar.css'
import './css/Home.css'
import './css/login.css'
import './css/signUp.css'
import AppWrapper from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)

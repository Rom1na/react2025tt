import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import { CarritoProvider } from './components/carritoContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
    <Router>
    <App />
    </Router>
    </CarritoProvider>
  </StrictMode>,
)

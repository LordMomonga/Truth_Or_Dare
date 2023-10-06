import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'tailwindcss/tailwind.css';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
  <Router>
  <App />
  </Router>
  </AuthContextProvider>
 
</React.StrictMode>
)

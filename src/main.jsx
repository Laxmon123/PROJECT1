import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/variables.css'
import './styles/navbar.css'
import './styles/home.css'
import './styles/age-calculator.css'
import './styles/services.css'
import './styles/about.css'
import './styles/portfolio.css'
import './styles/contact.css'
import './styles/footer.css'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
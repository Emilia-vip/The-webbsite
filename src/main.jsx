import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Buttons.jsx'
import './button.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



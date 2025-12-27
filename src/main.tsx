import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root');

/**
 * Loads the React front end.
 * Uses ESLint rules.
 */

if (container) {
  const root = createRoot(container)
  root.render(  
  
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,)
}
else {
 console.error("root not found") 
}


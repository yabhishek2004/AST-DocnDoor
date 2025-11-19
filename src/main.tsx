import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} catch (error) {
  console.error('Error rendering app:', error)
  rootElement.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Error Loading Application</h1><p>Please refresh the page or contact support.</p></div>'
}


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './components/Sidebar.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <Sidebar />
      {/* <App /> */}
    
  </StrictMode>,
)
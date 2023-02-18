import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavScrollExample from './components/navBar/NavScrollExample'
import NewProductButtom from './components/newProductButtom/newProductButtom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <NavScrollExample/>
    <NewProductButtom/>
  </React.StrictMode>,
)

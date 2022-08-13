import React from 'react'
import { createRoot } from 'react-dom/client'
import 'typeface-nunito'
import App from './App'
import './style.css'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

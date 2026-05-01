import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="ticks"></div>
      <div className="App">
        <div className="left">
          <h1>FIP Web</h1>
          <p>FIP Web is a web application for the FIP project. It is a tool for the management of the FIP project.</p>
          <a href="https://github.com/fip/fip-web" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
      </div>
    </>
  )
}

export default App

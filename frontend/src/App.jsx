import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './component/home/Index'
import SignUp from './component/Auth/SignUp'

import Home from "./pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Home/>
    </>
  )
}

export default App

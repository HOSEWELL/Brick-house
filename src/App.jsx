import { useState } from 'react'
// import './App.css'
import Navlink from './assets/Navlink'
import Navbar from './assets/Navbar'
import Landing from './assets/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navlink/>
     <Navbar/>
     <Landing/>
    </>
  )
}

export default App

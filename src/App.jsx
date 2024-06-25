import { useState } from 'react'
import './App.css'
import Navlink from './components/Navlink'
import Navbar from './components/Navbar'
import Landing from './components/Landingpage'
import Photo from './components/photosdiv'
import Discount from './components/Discount'
import Footer from './components/footer'
import Series from './components/Series'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navlink/>
     <Navbar/>
     <Landing/>
     <h1 style={{textAlign:'center'}}>Recently Viewed</h1>
    <Photo/>
    <h1 style={{textAlign:"center"}}>New</h1>
    <Photo/>
    <h1 style={{textAlign:"center"}}>Series</h1>
    <Series/>
    <h1 style={{textAlign:"center"}}>Discount</h1>
    <Discount/>
    <Footer/>
    </>
  )
}

export default App

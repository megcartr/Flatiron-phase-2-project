import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <NavBar/>
      
    </>
  )
}

export default App

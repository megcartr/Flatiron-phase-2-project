import React from "react";
import './App.css'
import NavBar from './Components/NavBar'
import { BrowserRouter } from "react-router-dom"
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import Fitness from './Components/Fitness'
import Nutrition from './Components/Nutrition'


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/home" Component={Home}/>
            <Route exact path="/fitness" Component={Fitness}/>
            <Route exact path="/nutrition" Component={Nutrition}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

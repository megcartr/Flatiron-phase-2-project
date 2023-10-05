import React from "react";
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
// import {Route, Switch} from "react-router-dom"
// import Fitness from './Components/Fitness'
// import Nutrition from './Components/Nutrition'


function App() {
  
  return (
    <div>
      <NavBar/>
      {/* <Switch>
        <Route path="/home">
        </Route>
        <Route path="/fitness">
          <Fitness/>
        </Route>
        <Route path="/nutrition">
          <Nutrition/>
        </Route>
      </Switch> */}
    </div>
  )
}

export default App;

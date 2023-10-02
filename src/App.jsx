
import {Route, Switch} from "react-router-dom"
import './App.css'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Fitness from './Components/Fitness'
import Nutrition from './Components/Nutrition'

function App() {
  const [page, setPage]=useState("/")

  function getCurrentPage() {
    switch(page) {
      case "/Fitness":
        return <Fitness/>
      case "/Nutrition":
        return <Nutrition/>
    }
  }

  return (
    <div>
      <Header/>
      <NavBar onChange={setPage}/>
      {getCurrentPage()}
      </div>
  )
}

export default App;

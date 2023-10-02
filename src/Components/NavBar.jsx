import React from "react";
import Fitness from './Fitness'
import Nutrition from './Nutrition'

function NavBar({onChangePage}) {

    function linkPage(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    return(
        <nav>
            <a onClick={linkPage} href="/Fitness">Fitness</a>
            <a onClick={linkPage} href="/Nutrition">Nutrition</a>
        </nav>
    )
}

export default NavBar;
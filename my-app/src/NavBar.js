import React from "react";
import App from "./App";
import Fitness from "./Fitness";
import Nutrition from "./Nutrition";

function NavBar() {
    return(
        <nav>
            <a href={Fitness}>Fitness</a>
            <a href={Nutrition}>Nutrition</a>
        </nav>
    )
}

export default NavBar;
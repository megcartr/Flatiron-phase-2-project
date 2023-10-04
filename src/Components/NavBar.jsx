import React from "react";
import {NavLink} from "react-router-dom"


function NavBar() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/fitness">Fitness</NavLink>
                </li>
                <li>
                    <NavLink to="/nutrition">Nutrition</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar;
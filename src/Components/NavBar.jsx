import React from "react";
import {NavLink} from "react-router-dom"



function NavBar() {
    return(
        <nav>
            <div>
                <ul>
                    <NavLink to="/home">Home</NavLink> {'   '}
                    <NavLink to="/fitness">Fitness</NavLink>{'   '}
                    <NavLink to="/nutrition">Nutrition</NavLink>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;
import React from "react";
import Increment from "./Increment";

function Exercises({type, image}) {
    return(
        <div>
            <h2>{type}</h2>
            <Increment/> <h2>minutes</h2>
            <img src={image}></img>
        </div>
    )
}

export default Exercises;
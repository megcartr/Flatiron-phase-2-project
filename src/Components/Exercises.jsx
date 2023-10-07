import React from "react";

function Exercises({type, image}) {
    return(
        <div>
            <h1>{type}</h1>
            <img src={image}></img>
        </div>
    )
}

export default Exercises;
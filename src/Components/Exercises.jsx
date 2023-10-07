import React from "react";

function Exercises({type, image}) {
    return(
        <div>
            <h2>{type}</h2>
            <img src={image}></img>
        </div>
    )
}

export default Exercises;
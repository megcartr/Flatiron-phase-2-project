import React from "react";
import Form from "./Form";

function Exercises({type, image}) {
    return(
        <div>
            <h2>{type}</h2>
            <img src={image}></img>
            <Form/> 
        </div>
    )
}

export default Exercises;
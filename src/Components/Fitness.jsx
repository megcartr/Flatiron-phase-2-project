import React from "react";
import {useEffect, useState} from "react";
// import exercises from "./exercises.js";


function Fitness() {
    const [fitness, setFitness] = useState([]);

    useEffect(() => {
        fetch("./exercises.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(setFitness),
        })
        .then(response => response.json())
        .then(data =>setFitness(data.fitness))
    },[])

    return(
        <div id="fitness"></div>
    )
}

export default Fitness;
import React from "react";
import {useEffect, useState} from "react";


function Fitness() {
    const [fitness, setFitness] = useState([]);

    useEffect(() => {
        fetch("/Fitness.json") 
        .then(response => response.json())
        .then(data => setFitness(data))
    },[])

    return(
        <div id="fitness"></div>
    )
}

export default Fitness;
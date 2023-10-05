import React from "react";
import {useEffect, useState} from "react";



function Fitness() {
    const [fitness, setFitness] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fitness)
        })
        .then((response) => response.json())
        .then(data =>setFitness(data.fitness))
    },[])

    return(
        <div id="fitness">
        {fitness}
        </div>
    )
}

export default Fitness;
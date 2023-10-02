import React from "react";
import {useEffect, useState} from "react";

function FitnessPage() {
    const [fitness, setFitness] = useState;

    useEffect( () => {
        fetch("/Fitness.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(r => r.json())
        .then(data => setFitness(data))
    })

    return(
        <div id="fitness"></div>
    )
}
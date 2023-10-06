import React from "react";
import {useEffect, useState} from "react";



function Fitness() {
    const [fitness, setFitness] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/exercises")
        .then((response) => response.json())
        .then(data =>setFitness(data))
    },[])

    return(
        <div id="fitness">
        {excercises.map((id, type, image) => (
        <excercises
            id={id}
            type={type}
            image={image}/>
    ))}
        </div>
    )
}

export default Fitness;
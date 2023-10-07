import React, {useEffect, useState} from "react";
import Exercises from "./Exercises";


function Fitness() {
    const [fitness, setFitness] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/exercises")
        .then((response) => response.json())
        .then(data =>{setFitness(data)})
    },[])

    return(
        <div id="fitness">
        {fitness.map((fit) => (
        <Exercises
        key={fit.id}
        type={fit.type}
        image={fit.image}/>
    ))}
        </div>
    )
}

export default Fitness;
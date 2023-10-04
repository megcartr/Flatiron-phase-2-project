import React from "react";
import {useState} from "react";

function Nutrition() {

    const [count, setCount]=useState(0);

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        setCount(count - 1)
    }

    return(
        <div id="nutrition">
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Nutrition;
import React from "react";
import {useState} from "react";

function Nutrition() {
    
    const [count, setCount]=useState(0);

    function increment(){
        setCount(function (prevCount) {
                return (prevCount += 1)
        })
    }

    function decrement(){
        setCount(function (prevCount) {
            if (prevCount>0) {
                return (prevCount -= 1)
            } else {
                return (prevCount = 0)
            }
        })
    }

    return(
        <div id="nutrition">
            
            <h2>FRUITS</h2>

            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>

            <h2>VEGETABLES</h2>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>

            <h2>WATER</h2> 
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>


    )
}

export default Nutrition; 


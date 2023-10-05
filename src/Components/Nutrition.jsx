import React from "react";
import Increment from "./Increment";

function Nutrition() {
 
    return(
        <div id="nutrition">
            
            <h2>FRUITS</h2>
            <Increment/>
            
            <h2>VEGETABLES</h2>
            <Increment/>

            <h2>WATER</h2> 
            <Increment/>
        </div>


    )
}

export default Nutrition; 


import React, {useState} from "react";


function Form() {
   const [minutes, setMinutes] = useState("");
   const handleSubmit = (e)=>{e.preventDefault()}

    return(
    <form onSubmit={handleSubmit}>
        <input onChange= {(e) => setMinutes(e.target.value)}
        value={minutes}/>
        <button type= "submit">submit</button>
    </form>  
)}

export default Form;
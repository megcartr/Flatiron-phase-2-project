import React, {useState} from "react";


function Form() {
   const [minutes, setMinutes] = useState("");
   const handleSubmit = (e)=>{e.preventDefault()}

   fetch("saveContact/", {
    method: "POST",
    body: JSON.stringify(minutes),
    headers: {
        "Content-Type": "application/json"
    },
})

    return(
    <form onSubmit={handleSubmit}>
        <input onChange= {(e) => setMinutes(e.target.value)}
        value={minutes} placeholder="            duration"/>
        <button type= "submit">submit</button>
    </form>  
)}

export default Form;
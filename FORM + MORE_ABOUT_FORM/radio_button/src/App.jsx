import React, { useState } from "react";

function App() {
  const [gender,setGender] = useState("male");
  return (
  
      <div className="body">
        <h1>Radio Buttons</h1>
        <label htmlFor="male">Male</label>
        <input type="radio" checked={gender === "male"} onChange={()=>{
          setGender("male");
        }}>
        </input>

        <label htmlFor="female">Female</label>
        <input type="radio" checked={gender === "female"} onChange={()=>{
          setGender("female")
        }} >
        </input>
      </div>
    
  );
}

export default App;

import { useState } from 'react'

function App() {
   const[username,setUsername]=useState("");
   const[password,setPassword]=useState("");
    

   function handlePassword(e){
      e.preventDefault();
      console.log("hello", username);

   }
   
 return(
   <div>
      <h1>Form Tutorial</h1> 
      
     <form onSubmit={handlePassword}>

      <div>
      <label htmlFor="username">Username: </label>
       <input
       id="username" 
       type="text" 
       value={username}
       onChange={(e)=>setUsername(e.target.value)}>
       </input>
      </div>

       <div>
       <label htmlFor="password">Username: </label>
       <input
       id="password" 
       type="password" 
       value={password}
       onChange={(e)=>setPassword(e.target.value)}>
       </input>
       </div>

       <button>Submit</button>

     </form>
   </div>
 );

}

export default App;

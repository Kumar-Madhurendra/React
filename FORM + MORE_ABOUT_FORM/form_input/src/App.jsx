import {useState} from "react";

// --------------------------------METHOD 1- Controlled input OF WRITING USING FUNCTION  ------------------------------------------

// function App() {
//    const[username,setUsername]=useState("harshit");
//    function handleUsername(e){
//     // console.log("handle username called");
//     // console.log(e.target.value);
//     setUsername(e.target.value);
//    }

//   return(
//     <div>
//       <h1>Form Tutorial</h1>
//       <form>
//          <label htmlFor="username">Username: </label>
//         <input
//         id="username" 
//         type="text" 
//         value={username}
//         onChange={handleUsername}>
//         </input>

//       </form>
//     </div>
//   );
// }




// --------------------------------METHOD 2 - Controoled input OF WRITING USING CALLBACK  ------------------------------------------

function App() {
  const[username,setUsername]=useState("harshit");
  
 return(
   <div>
     <h1>Form Tutorial</h1>
     <form>
        <label htmlFor="username">Username: </label>
       <input
       id="username" 
       type="text" 
       value={username}
       onChange={(e)=>setUsername(e.target.value)}>
       </input>

     </form>
   </div>
 );
}

export default App;

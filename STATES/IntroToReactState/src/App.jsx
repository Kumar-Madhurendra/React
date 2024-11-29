// phle hmm react me class based live cycle method ka use krte the state component managing k liye // 
// ab hum reacthooks ka use krke function based component ki madad lekr state manage krte h //
// state ek tarika h change ko handle krne ka without changing to our code snippet //

import React from 'react';

// --------------------------es case me variable se state change krne ki kossi ---------------//
// function App() {
//   let name="Vidhut";      // variable hamare UI ko change nhi kr skta h
//   function handleChange(){
//     name="roshan"; 
//     console.log(name);
//   }
//   return(
//     <div>
//       <h1>{name}</h1>
//       <button onClick={handleChange}>Click Me</button> 
//     </div>
//   )
// }

 

// ---------------- using hooks i.e. useState(): which return an array ---------------//
// -------jitne bhi hooks hai wo saare component k ander directly cll hote h iske alawa khi use nhi hote-------//

//useState(defaultValue) --> jo ki array pss krta h -->>  [stateValue,functionToUpdateThatStateValue];

// huaa kya ?
//state --> "harshit";
//state --> "john";
//when state changes our component rerender
//then UI changes


// --------------------------- Now code-------------------------------------

// import {useState} from 'react';
 
// function App() {
//   const returnedName=useState("harshit");
//   const firstName=returnedName[0];
  
//   const functionToUpdateFirstName=returnedName[1];
//   function handleUpdatedFirstName(){
//     functionToUpdateFirstName("john");
//   }

//   return (
//     <div>
//       <h1>{returnedName}</h1>
//       <button onClick={handleUpdatedFirstName}>Click Me</button>
//     </div>
//   );
// }


// -------------------uing destructuring of array------------------
// import {useState} from 'react';

// function App() {
//   const [firstName, setFirstName]=useState("harshit"); 
  
//   function handleNameChange(){
//     setFirstName("john");
//   }
  
//   return (
//     <>
//       <h1>{firstName}</h1>
//       <button onClick={handleNameChange}>Click Me</button>
//     </>
//   )
// }


// -------------------uing destructuring of array------------------

// import {useState} from 'react';

// function App() {
//   const [firstName, setFirstName]=useState("harshit"); 
//   const [middleName, setMiddleName]=useState("kumar");
//   const [lastName,setLastName]=useState("singh");
  
//   function handleNameChange(){
//     if(firstName=="harshit" && middleName=="kumar" && lastName=="singh"){
//       setFirstName("John");
//       setMiddleName("smart");
//       setLastName("bro");

//     }else{
//       setFirstName("harshit");
//       setMiddleName("kumar");
//       setLastName("singh");
//     }
     

//   }
//   return (
//     <>
//       <h1>{firstName}</h1>
//       <h1>{middleName}</h1>
//       <h1>{lastName}</h1>
//       <button onClick={handleNameChange}>Click Me</button>
//     </>
//   )
// }

export default App
 



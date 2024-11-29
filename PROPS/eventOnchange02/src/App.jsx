import React from 'react';
// ----------------------------ONCLICK()------------------
// function App() {
//   function handleClick(){
//     console.log("hii there??");
//   }

//   return (
//     <div>
//       <h1>app</h1>
//       <button onClick={handleClick}>Click me</button>
       
//     </div>
//   )
// }


// --------------------------target----------------------------

// function App() {
//   function handleClick(event){   // yha browser khudse argument pss krha h
//     event.target.textContent="you clicked me";
     
//   }

//   return (
//     <div>
//       <h1>app</h1>
//       <button onClick={handleClick}>Click me</button>
       
//     </div>
//   )
// }


// --------------------------passing their own argument----------------------------
function App() {
      function handleClick2(firstName,lastName ){
        console.log(firstName, lastName);
         
      }
      function wrapperFunction(){
        handleClick2("roushan" ," shanu");
      }

  return (
    <div className="App">
      <h1>APP</h1>
      <button onClick={wrapperFunction}>Click Me</button>
    </div>
  );
}

export default App;



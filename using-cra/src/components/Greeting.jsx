import React from "react";
import "./Greeting.css";

// function Greeting() {
//
//   return (
//     <div className="bg-dark" >
//     <h1>hello , Kumar </h1>
//     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, sint? Eius, quisquam.</p>
//     </div>
//   )
// }

// ---------------------JAVASCRIPT KO JSX ME LIKHNE K LIYE CURLY BRACES LAGANA PADEGA ----------------

function Greeting() {
  const firstName = "Kumar";

  // const firstName=(name) => name.toUpperCase();

  // function firstName(name){
  //     return name.toUpperCase();
  // }

  // const firstName= function (name){
  //     return name.toUpperCase();
  // }

  // const firstName = (name) =>{
  //         return name.toUpperCase();
  // }

  //-------------- ## INLINE CSS  ///  TEMPLATE STRING : `` (backtick)  ------------
const cssStyles={
    backgroundColor:"lightblue",
    fontFamily:"sans-serif",
    margin:"1rem",
    padding:"1 rem",
};

  return (
    <div style={cssStyles} >
      <h1>Hello ,{firstName} </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
        sint? Eius, quisquam.
      </p>
    </div>
  );
}

export default Greeting;

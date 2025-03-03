// -------------------CREATE REACT APP USING CRA -- CRA ka matlab hai Create React App, jo ek popular command-line tool hai React application banane ke liye. Iska use karke bina Webpack ya Babel jaise build tools ko manually configure kiye, ek nayi React app setup kar sakte ho.
//   -- Ek nayi React app banane ke liye, aapko yeh command chalani hoti hai: "npx create-react-app my-app" isse ek new repo bn jayegi .
//   -- to run write command "npm start"

//yha es6 module use krte h import export k liye
import React from "react"; // 'react' ye packages node_modules me pde hue h so yha react bhi h toh isko import kr liya
import ReactDOM from "react-dom/client";

// //------------method-1
// ReactDOM.createRoot(document.getElementById("root")).render(<h1 >hello world !!</h1>);

//------------method-2
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<h1>aakhir ye bhi aa gya bhai</h1>);
root1.render(
  <React.StrictMode>
    {" "}
    <h1>hello world !!</h1>{" "}
  </React.StrictMode>
);

// //------------method-3
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// function Hello() {
//   return <h1>ye bhi theek h</h1>;
// }
// root2.render(<Hello />);

// -----------------------------IMPORTING COMPONENT(helloWorld) -------------------------------------------------
// -----------------------------Basically in react we called each function as component -------------------------------------------------

//----------- ## for single import
// import Hello from "./HelloWorld";

// const root1=ReactDOM.createRoot(document.getElementById("root"));
// root1.render(
//     <Hello/>
// );

// ---------- ## for multiple import/export
// import Hello from "./HelloWorld";         // agar ek import h file me toh yha kucxh bhi name rkh skte ho like Hello or ...
// import {HelloWorld2} from "./HelloWorld";    // agar ek se jyada import h same file me toh curly braces k ander same names hoga as file name in component

// const root1=ReactDOM.createRoot(document.getElementById("root"));
// root1.render(
//     <>
//     <Hello/>
//      <HelloWorld2/>
//      </>

// );

// -----------------------------IMPORTING only app.js (helloWorld) -------------------------------------------------
import Aap from "./Aap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Aap />
  </>
);

import { useState } from "react";
import "./App.css";
// ------------------USING NORMAL FUNCTION-----------------

// function App() {
//     const [count, setCount] = useState(0);

//     function handleCountIncrease(){
//       setCount(count+1);
//     }
//     function handleCountDecrease(){
//       setCount(count-1);
//     }

//     function handleReset(){
//       setCount(0);
//     }

//     return(
//       <>
//            <h1> {count}</h1>
//            <button onClick={handleReset}>reset</button>
//            <button onClick={handleCountIncrease}>Increase</button>
//            <button onClick={handleCountDecrease}>Decrease</button>
//       </>
//     );
//   }

// ------------------USING Arrow FUNCTION-----------------

// function App() {
//   const [count, setCount] = useState(0);

//   const handleCountIncrease=()=>{
//     setCount(count+1);
//   }
//   const handleCountDecrease=()=>{
//     setCount(count-1);}

//    const handleReset=()=>{
//     setCount(0);}

//   return(
//     <>
//          <h1> {count}</h1>
//          <button onClick={handleReset}>reset</button>
//          <button onClick={handleCountIncrease}>Increase</button>
//          <button onClick={handleCountDecrease}>Decrease</button>
//     </>
//   );
// }

// ------------------------no need to create function ------------------
// ------------------------use arrow function  ()=>{}--------------------------


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1> {count}</h1>
//       <button onClick={() => {setCount(0);}}>reset</button>


//       <button onClick={() => {setCount(count + 1);}}>Increase</button>


//       <button onClick={() => {setCount(count - 1);}}>Decrease</button>
//     </>
//   );
// }



// ############################### UPDATE STATE USING CALL BACK ################################### 

// --------------M-1 using parameter in callback function AND WITH  'return' the prevCount +1/-1/0 ----------------------

// function App() {

//    const[count,setCount]=useState(0);

//    function handleIncrease(){
//     setCount((prevCount)=>{ return prevCount+1;});
//    }
//    function handleDecrease(){
//     setCount((prevCount)=>{return prevCount-1;});
//    }
//    function handleReset(){
//     setCount((prevCount)=>{return 0;});
//    }


//   return(
//     <>
//     <h1 >{count}</h1>
//     <button onClick={handleIncrease}>Increase</button>
//     <button onClick={handleReset}>Reset</button>
//     <button onClick={handleDecrease}>Decrease</button>
//     </>
//   );
// }

// ------------M-2 - using parameter in callback function without 'return', only the prevCount +1/-1/0 -------------------

// function App() {

//   const[count,setCount]=useState(0);

//   function handleIncrease(){
//    setCount((prevCount)=> prevCount+1);
//   };
 
//   function handleDecrease(){
//    setCount((prevCount)=> prevCount-1);
//   }
  
//   function handleReset(){
//    setCount((prevCount)=>0);
//   }

//  return(
//    <>
//    <h1 >{count}</h1>
//    <button onClick={handleIncrease}>Increase</button>
//    <button onClick={handleReset}>Reset</button>
//    <button onClick={handleDecrease}>Decrease</button>
//    </>
//  );
// }
  
export default App;

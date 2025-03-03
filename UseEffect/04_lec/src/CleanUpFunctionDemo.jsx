import React from 'react';
import {useState ,useEffect} from 'react';
//cleanup function 

// 1 : before component unmount

//2 : when there is some value inside dependency array

//when value changes
//1 . component re-render
//2 . cleanup function 
//3 . useEffect runs

function CleanUpFunctionDemo(){
    console.log("rendered");
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
        console.log("Effect callback");
       return function(){
            console.log("Cleanup Function");
       }
     } ,[counter]);
  return (
    <div>
        <h1>counter:{counter} </h1>
        <button onClick={()=>setCounter((prev)=>prev+1)}>Increase</button>

    </div>
  )
}

export default CleanUpFunctionDemo
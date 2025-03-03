import React from 'react';
import { useState,useEffect } from 'react';

const URL="https://jsonplaceholder.typicode.com/users";
// function fetchDataExample() {
  
//     useEffect(()=>{
//         fetch(URL)
//                  .then((response)=>response.json())
//                  .then((data)=>{
//                     console.log(data);
//                  });
//     },[]);
//   return (
//     <div>
//       fetchDataExample
       

//     </div>
//   )
// }


// function fetchDataExample(){         //--- NORMAL FUNCTION
const fetchDataExample=async()=>{     //----ARROW FUNCTION
  const[users,setUsers]=useState([]);

  async function fetchData(){
    const response=await fetch(URL);
    const data=await response.json();
    setUsers(data)
    console.log(data);
  }
  
  useEffect(()=>{
    fetchData();
  },[]);
  return <div>fetchData</div>
}[]
export default fetchDataExample;
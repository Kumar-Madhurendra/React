// UseEffect - used to perform :
//                                a)Things that are not directly linked with component we do it by useEffect
//                                b)handling side effects
//                                c)Fetch data from api
//                                d)Event listners

//  It takes callBack function as input 

// useEffect(Firstargument,secondArgument);
// firstArgument -> callBack Function
// secondArgument -> dependency Array

// depenedency array 
// empty array - > [] ---> useEffect will be called only once 
// dependency array with some value ---> then jitni baar state change hoga utni baar useEffect run karega
// lekin jb koi bhi dependent array pass nhi karenge ---> toh bhi jitni baar state change hoga utni baar useEffect run karega

import {useEffect,useState} from 'react';
// -----------------------------------------------------------
// function ExampleUseEffect(){
//     console.log("component rendered");
//     useEffect(()=>{
//         console.log("Inside UseEffect");
//     });
//   return (
//     <div>

//     </div>
//   );
// }


// -------------------------component ko change krne k liye hmm ab useState banayenge----------------------------------

function ExampleUseEffect() {
        console.log("component rendered");          ///ye check krne kliye likhe hai taaki ye pta chl ske ki component re-render ho rhi h ya nhi jb bhi state change ho rhi h
        const[counter1,setCounter1]=useState(0);
        const[counter2,setCounter2]=useState(0);
        useEffect(()=>{
            console.log("Inside UseEffect");
        },[counter1]);   //  jo bhi dependence array k jagh likha gya h uske change hone se hi useEffect call hoga
    
      return (
        <div>
            <h1>counter1:{counter1}</h1>
            <button onClick={()=>setCounter1((prevCounter)=>prevCounter+1)}>Increase1</button> 
            <h1>counter2:{counter2}</h1>
            <button onClick={()=>setCounter2((prevCounter)=>prevCounter+1)}>Increase2</button>
        </div>
      );
    }
export default ExampleUseEffect;
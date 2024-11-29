import { useState } from 'react';


// function Counter() {
//     const[count,setCount]=useState(0);

//     function handleCount(){  
//     //teen baar hone k bawjoodh bhi count teen baar update nhi hogi kyuki ye async h ...ye batch karega aur doosare process ko hone dega khud ko wait krke

//     //count=0
//       setCount(count+1);

//     //count=0
//       setCount(count+1);

//     //count=0
//       setCount(count+1);

//     }

//   return (
//     <div>
//         <h1>Count : {count} </h1>
//         <button onClick={handleCount}>Increase Count</button>
//     </div>
//   )
// }


// =========================================TO REMOVE THIS ISSUE OF BATCHING using call back function ==================================


// function Counter() {
//   const[count,setCount]=useState(0);

//   function handleCount(){  
//   //teen baar hone k bawjoodh bhi count teen baar update nhi hogi kyuki ye async h ...ye batch karega aur doosare process ko hone dega khud ko wait krke

//   //input count=0
//     setCount((prevcount)=>prevcount+1);

//   //input count=1
//   setCount((prevcount)=>prevcount+1);

//   //input count=2
//   setCount((prevcount)=>prevcount+1);
    

//   }

// return (
//   <div>
//       <h1>Count : {count} </h1>
//       <button onClick={handleCount}>Increase Count</button>
//   </div>
// )
// }









// ========================BEST WAY TO INCREASE THIS three TIMES ===================




function Counter() {
  const[count,setCount]=useState(0);

  function handleCount(){  
  //teen baar hone k bawjoodh bhi count teen baar update nhi hogi kyuki ye async h ...ye batch karega aur doosare process ko hone dega khud ko wait krke

  //input count=0
    setCount((prevcount)=>prevcount+3);
    
  }

return (
  <div>
      <h1>Count : {count} </h1>
      <button onClick={handleCount}>Increase Count</button>
  </div>
)
}















export default Counter;
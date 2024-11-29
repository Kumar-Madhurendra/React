import Greeting from "./component/Greeting";

 function App() {
   return(
     <div>
      <Greeting firstName="Raushan" lastName="Ojha" age={21}/>
      </div>
   )
 }
 

// ---------------------javascript list hai so use curly brace inside greeting----------


// function App() {
// const User=["car",21];
//   return (
//     <div>
//      <Greeting firstName="Raushan" lastName="Ojha" user={User[0]} user1={User[1]}/>
//      </div>
//   )
// }


//---------------javascript object hai so use curly brace inside greeting -----------

// const User = { hobby: "reading", age: 23 };    //javascript ka object[ key :"value"] pairs

// function App() {
//   return (
//     <div>
//       <Greeting firstName="roushan" lastName="ojha" user={User.hobby} user1={User.age} />
     
//     </div>
//   );
//  }


// --------------------Default props---------------

// function App() {
//   return (
//     <div>
//       <Greeting  firstName="Kumar" lastName="Madhurendra" hobby="writing"  />
//     </div>
//   )
// }

// --------------------fullName---------------
// import React from 'react'
// import ShowFullName from './component/ShowFullName';
// function App() {
//   return (
//     <div><ShowFullName firstName="raushan" lastName="ojha"/></div>
//   )
// }



// --------------------Children props---------------
import React from 'react';
import Greeting from './component/Children';
function App(){
return(
<Greeting firstName="kumar" lastName="Madhurendra">
  <h1>hii there </h1>
  <p>i am roushan</p>
</Greeting>
)
}

export default App;







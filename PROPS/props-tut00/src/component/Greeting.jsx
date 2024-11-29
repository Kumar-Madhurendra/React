//-------------- props is an object--------------
//-------------- props are immutable so we can't change its value . We can "only read" props--------------

// function Greeting(props) {
//     const firstName=props.firstName;
//     const lastName=props.lastName;
//     const age=props.age;

//     return (
//       <div>
//         <h1>I am {firstName} {lastName}. My age is {age} </h1>
//       </div>
//     );
//   }

//-------------- object destructuring  -->> less time taking --------------

// function Greeting(props) {
// const {firstName,lastName,user,user1}=props;          // destructuring object

// return(
//   <div>
//     <h1>I am {firstName} {lastName}. I like {user} driving and my age is {user1} </h1>
//   </div>
// );
// }

//-------------- object destructuring  -->> less time taking --------------

// function Greeting({firstName,lastName,user,user1}) {
//   return (
//     <div>
//       <h1>I am {firstName} {lastName}. I like {user} books and my age is {user1} </h1>
//     </div>
//   );
// }




//------------Default props - mtlb agr props me define nhi hoga componemts toh uss time wo default value le legi--------------


// function Greeting({ firstName, lastName, hobby = "Reading" }) {
//   return (
//     <div>
//       <h1>
//         Hello , i am {firstName} {lastName} and i like {hobby}{" "}
//       </h1>
//     </div>
//   );
// }



 





















export default Greeting;



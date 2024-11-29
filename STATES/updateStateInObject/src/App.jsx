import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "kumar",
    lastName: "madhurendra",
    email: "kumarmadhurendra@gmail.com",
    number: 9909990,
    age: 23,
  });
  //

  const handlePerson = () => {

    // ##m-1
    // setPerson({...person,age:person.age+1});

    //  ##m-2
    setPerson((prevState) => {
      return {
        ...prevState,
        age: prevState.age + 1,
        firstName: "Roushan",
        lastName: "Ojha",
        number: "12345678",
        email:"harshitvashisth@gmail.com",
        
      };
    });

    // #m-3
    // setPerson(prevState=>({...prevState,age:prevState.age+1}));
  };


  return(
    <>
      <h1>Update State In Object</h1>
      <p>
        Name: {person.firstName} {person.lastName}
      </p>
      <p>email: {person.email}</p>
      <p>number: {person.number}</p>
      <p>email: {person.email}</p>
      <p>age: {person.age}</p>
      <button onClick={handlePerson}>To Increase Age</button>
       
    </>
  );
}
 
export default App;

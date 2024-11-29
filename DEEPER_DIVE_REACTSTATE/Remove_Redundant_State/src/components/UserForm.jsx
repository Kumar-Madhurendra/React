import React, { useState } from "react";
import DisplayFullname from "./DisplayFullname";
function UserForm() {
  console.log("re-rendered");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

//----- through state 
// Const [fullName,setFullName]=useState("");  //no need to create an state ,we  can access through variable

//--- through variable
  const fullName =firstName+" "+lastName;

  return (
    <form>
      <div>
        <label htmlFor="firstname">firstname </label>
        <input
          type="text"
          name="firstname"
          value={firstName}
          id="firstname"
          onChange={(e) => {
            setFirstName(e.target.value);
            // setFullName(e.target.value+" "+ lastName);
          }}
        ></input>
      </div>
      <br />
      <div>
        <label htmlFor="lastname">lastname </label>
        <input
          type="text"
          name="lastname"
          value={lastName}
          id="firstname"
          onChange={(e) => {
            setLastName(e.target.value);
            // setFullName(firstName+" "+ e.target.value);

          }}
        ></input>
      </div>
      <br />
      <h2>user details</h2>
      <div>
        <p>FirstName: {firstName}</p>
        <p>lastName: {lastName}</p>
         <DisplayFullname newname={fullName}/>
      </div>
    </form>
  );
}

export default UserForm;

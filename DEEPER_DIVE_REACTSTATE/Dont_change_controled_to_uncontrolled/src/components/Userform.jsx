// =================Iss module me hmme ye bataya gya h, ki jb hmm useState("") me 
// kucch nhi likhenge  {[ yani nahi ("") aur nahi kucch value] i.e. useState() only}  
// toh ye undefined yani uncontrolled ki thrh kaam karega, value={firstName} dene 
// k baad bhi. Aur jb hmm set state ki madad se, firstName ki value koi string denge, toh 
// ab ye controlled ki thrh kaam karega joki ek warning message dega console pr 
//so to avoid ye warning hmm ya toh staring se uncontrolled input ya controlled input lenge



// ==============jaise ki iss example me hmm controlled input suru se hi lekr chle hai==========

import React, { useState } from "react";
 

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
        <p>FullName: {fullName}</p>
         
      </div>
    </form>
  );
}

export default UserForm;

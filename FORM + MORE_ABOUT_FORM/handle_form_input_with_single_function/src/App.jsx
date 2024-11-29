import React, { useState } from "react";

// function App() {

//   //HANDLE THROUGH MUTLI STATE.
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAddress] = useState("");

//   //OPERATED BY ONSUBMIT LINE NO-65
//   const handleSubmit=(e)=>{
//     e.preventDefault();    // taaki hamara page refesh naa ho
//     console.log(firstName);
//     console.log(lastName);
//     console.log(userName);
//     console.log(email);
//     console.log(password);
//     console.log(confirmPassword);
//     console.log(address);
//     console.log(phoneNumber);
//     console.log(address);
//   }

//   //REPLACE BY ARROW FUNCTION LINE NO- 89/75 . . .
//   // function handleFirstName(e){
//   //   e.preventDefault();
//   //   console.log(firstName);
//   // }
//   // function handleLastName(e){
//   //   e.preventDefault();
//   //   console.log(lastName);
//   // }
//   // function handleUsername(e){
//   //   e.preventDefault();
//   //   console.log(userName);
//   // }
//   // function handleEmail(e){
//   //   e.preventDefault();
//   //   console.log(email);
//   // }
//   // function handlePassword(e){
//   //   e.preventDefault();
//   //   console.log(password);
//   // }
//   // function handlePassword(e){
//   //   e.preventDefault();
//   //   console.log(confirmPassword);
//   // }
//   // function handleConfirmPassword(e){
//   //   e.preventDefault();
//   //   console.log(address);
//   // } function handlePhoneNumber(e){
//   //   e.preventDefault();
//   //   console.log(phoneNumber);
//   // }

//   return (
//     <form onSubmit={handleSubmit}  style={{ padding: "1rem" }}>
//       <h1>Handling Form</h1>

//       <div className="formGroup">
//         <label htmlFor="firstName">firstName: </label><br></br>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={firstName}   //controlled input
//           onChange={(e) => {
//             setFirstName(e.target.value);
//           }}
//         ></input>
//       </div>
//       <br></br>

//       <div className="formGroup">
//         <label htmlFor="lastName">lastName: </label><br></br>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={lastName}   //controlled input
//           onChange={(e) => {
//             setLastName(e.target.value);
//           }}
//         ></input>
//       </div>
//       <br></br>

//       <div className="formGroup">
//         <label htmlFor="userName">userName: </label><br></br>
//         <input
//           type="text"
//           id="userName"
//           value={userName}    //controlled input
//           name="userName"
//           onChange={(e) => {
//             setUserName(e.target.value);
//           }}
//         ></input>
//       </div>
//       <br></br>

//       <div className="formGroup">
//         <label htmlFor="email">Email: </label><br></br>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}    //controlled input
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         ></input>
//       </div>
//       <br></br>

//       <div className="formGroup">
//         <label htmlFor="password">Password: </label><br></br>
//         <input
//           type="text"
//           id="password"
//           name="password"
//           value={password}    //controlled input
//           onChange={(e) => {
//           setPassword(e.target.value);
//           }}
//         ></input>
//       </div>
//       <br></br>

//       <div className="formGroup">
//         <label htmlFor="confirmPassword">FirstName: </label><br></br>
//         <input
//           type="text"
//           id="confirmPassword"
//           value={confirmPassword}    //controlled input
//           name="confirmPassword"
//           onChange={(e) => {
//           setConfirmPassword(e.target.value);
//           }}
//         ></input>
//       </div>
//       <br></br>

//       <div className="formGroup">
//         <label htmlFor="phoneNumber">PhoneNumber:  </label><br></br>
//         <input
//           type="text"
//           id="phoneNumber"
//           value={phoneNumber}      //controlled input
//           name="phoneNumber"
//           onChange={(e) => {
//           setPhoneNumber(e.target.value);
//           }}
//         ></input>
//       </div>
//       <br></br>

//       <div className="formGroup">
//         <label htmlFor="address">Address: </label><br></br>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={address}     //controlled input
//           onChange={(e) => {
//           setAddress(e.target.value);
//           }}
//         ></input>
//       </div>
//       <input style={{margin:"1rem"}} type="submit" value="Signup" name=""></input><br></br>
//     </form>
//   );
// }

// --------------------------HANDLING THROUGH SINGLE STATE---------------------------

function App() {
  //HANDLING THROUGH SINGLE STATE
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });

  //OBJECT DESTRUCTURING so no need to write formdata.firstName/formData.lastname/. . . in the value 
  const {firstName,lastName,userName,password,confirmPassword,email,phoneNumber,address}=formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  ///DIRECT POORA OBJECT KO HI PRINT 
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h1>Handling Form</h1>

      <div className="formGroup">
        
        <label htmlFor="firstName">firstName: </label>
        <br></br>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName} //controlled input
          onChange={handleChange}
        ></input>
      </div>
      <br></br>

      <div className="formGroup">
        <label htmlFor="lastName">lastName: </label>
        <br></br>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={ lastName} //controlled input
          onChange={handleChange}
        ></input>
      </div>
      <br></br>

      <div className="formGroup">
        <label htmlFor="userName">userName: </label>
        <br></br>
        <input
          type="text"
          id="userName"
          value={ userName} //controlled input
          name="userName"
          onChange={handleChange}
        ></input>
      </div>
      <br></br>

      <div className="formGroup">
        <label htmlFor="email">Email: </label>
        <br></br>
        <input
          type="email"
          id="email"
          name="email"
          value={email} //controlled input
          onChange={handleChange}
        ></input>
      </div>
      <br></br>

      <div className="formGroup">
        <label htmlFor="password">Password: </label>
        <br></br>
        <input
          type="text"
          id="password"
          name="password"
          value={ password} //controlled input
          onChange={handleChange}
        ></input>
      </div>
      <br></br>

      <div className="formGroup">
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <br></br>
        <input
          type="text"
          id="confirmPassword"
          value={ confirmPassword} //controlled input
          name="confirmPassword"
          onChange={handleChange}
        ></input>
      </div>
      <br></br>

      <div className="formGroup">
        <label htmlFor="phoneNumber">PhoneNumber: </label>
        <br></br>
        <input
          type="text"
          id="phoneNumber"
          value={ phoneNumber} //controlled input
          name="phoneNumber"
          onChange={handleChange}
        ></input>
      </div>
      <br></br>

      <div className="formGroup">
        <label htmlFor="address">Address: </label>
        <br></br>
        <input
          type="text"
          id="address"
          name="address"
          value={ address} //controlled input
          onChange={handleChange}
        ></input>
      </div>
      <input
        style={{ margin: "1rem" }}
        type="submit"
        value="Signup"
        name=""
      ></input>
      <br></br>
    </form>
  );
}
export default App;

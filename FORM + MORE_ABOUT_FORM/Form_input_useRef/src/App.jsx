import { useState } from "react";

//////REVISION OF USESTATE - isme ek default value rhti h inside useState('')
//                           [state, setState] = useState(0);
//                           return's an array jisme 2cheeje hoti h phli khud state and dusari ek function jo us state ko update karega --------------------------
//                           react me useState ,state ko preserve krke rkhta hai
//                           like jb hmm username ko change kr rheah h toh count ki value increase nhi ho rhi h
//                           rerender k bawjooth bhi...sirf jis state ko aap change karenge sirf vo nhi change hoga

// ===========================EXAMPLE OF USEState=============================================

// function App() {
//   const [count, setCount] = useState(1);
//   const [username, SetUsername] = useState("Harshit");
//   console.log("component rendered");

//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <h1>Username: {username}</h1>
//       <button onClick={() => SetUsername("Mohit")}>ChangeUsername</button>
//     </div>
//   );
// }





//  ------------------------------------USEREF - return's an object
//                                              - with default property 'CURRENT'
//                                              - and this current act as a key jiski value kucch bhi ho skti h
//                                              - useRef k case me component re-render nhi hota
//                                              - useRef me aap String,Number,Array, object kr skte h 
//                                              - Also aap html element bhi store kr skte h
import { useRef } from "react";

// ===========================EXAMPLE OF USE REF=============================================

// function App() {
//   const username = useRef("harshit"); //username is an object uske andr current h jiski value h "harshit" cahe hmm current ki value jitni bhi change kr le
//   console.log(username);

//   const handleClick=()=>{
//     username.current="Mohit";  // mutable hota hai username ki value
//     console.log(username);
//   }

//   return (
//     <>
//       <h1>username : {username.current}</h1>
//       <button onClick={handleClick}>Change Name</button>
//     </>
//   );
// }

// ===========================EXAMPLE OF USE REF=============================================
 
// function App() {
//   console.log("re-render");
//   const h1Ref=useRef();
//   const handleClick=()=>{
//     console.log(h1Ref);
//     const h1Element=h1Ref.current;
//     h1Element.textContent="hii roushan";
//     h1Element.style.background="blue";
//     h1Element.style.color="white";
//   }
//   return(
//     <div>
//       <h1 ref={h1Ref}> hii there</h1>
//       <button onClick={handleClick}>Change Content</button>
//     </div>
//   )
// }




// ===========================FORM HANDLING USING USEREF=============================================

//uncontrolled component using useRef

function App(){
  const usernameRef=useRef();
  const passwordRef=useRef();

  function handleSubmit(e){
    e.preventDefault();
    const usernameInput=usernameRef.current;
    const passwordInput=passwordRef.current;
    
    console.log("Username", usernameInput.value);
    console.log("Password", passwordInput.value);
  }

    return(
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br/>
        <input id="username" type="text" ref={usernameRef}></input>
        <br/>
        <label htmlFor="password">Password</label>
        <br/>
        <input id="password" type="text" ref={passwordRef}></input>
        <br/>
        <br/>
        <button>Submit</button>

      </form>
    );


  }







export default App;

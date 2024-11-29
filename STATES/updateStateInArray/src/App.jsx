import { useState } from "react";
import { v4 as uuid } from "uuid";

//  ---------------using useState we add value and print on screen-------------
//   function App() {
//     const [fruits, setFruits] = useState(["Apple", "Mango"]);

//     return(
//       <>
//       <ul>
//           {fruits.map((fruit)=>(
//             <li key={uuid()}>{fruit}</li>
//           ))}
//       </ul>

//   </>

//   );

// }

//  --------------- Add new element on array using arrow function -------------

function App() {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  const handleSetFruits = () => {
    // #m1
    setFruits([...fruits,"phla Kela"]);

    //#m2 - jb bhi return karenge toh new State return krni hogi ..existing state ko nhi cher skte
    setFruits((prevState)=>{return [...prevState,"dusaraKela"]});   
    
    //#m3
    setFruits((prevState) => [...prevState, "TeesraKela"]);

  };

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={uuid()}>{fruit}</li>      /////IT'S necessary to use 'uuid' here to avoid warning
        ))}
      </ul>

      <button onClick={handleSetFruits}>Click To Add </button>
    </>
  );
}

export default App;

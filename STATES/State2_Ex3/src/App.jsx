import { useState } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Kumar", lastName: "Madhurendra", age: 23 },
    { id: 2, firstName: "Roushan", lastName: "Kumar", age: 25 },
    { id: 3, firstName: "Shanu", lastName: "Kumar", age: 27 },
    { id: 4, firstName: "Yudwik", lastName: "Kumar", age: 29 },
  ]);

  function increaseAge(id) {
    // #developer choice of syntax
    // map,filter,reduce,find
    setUsers((prevState) => {
      return prevState.map((users) => {
        if (users.id === id) {
          return { ...users, age: users.age + 1 };
        } else {
          return users;
        }
      });
    });
  }

  const deleteUser = (id) => {
    ///M-1 USING LOOP///
    // const newState=[];
    // for(let user of users){
    //   if(user.id !==id){
    //     newState.push(user);
    //   }
    // }
    // setUsers(newState);

    ///M-2 USING FILTER but explicit//
  //   setUsers((prevState) => {
  //     return prevState.filter((user) => {
  //       return user.id !== id;
  //     });
  //   });
  // };

  ////M-3USING FILTER BUT IMPLICIT////////
  setUsers(prevState=>prevState.filter(user=>user.id !==id))
};

  return (
    <>
      <div className="App">
        <Users user={users} increaseAge={increaseAge} deleteUser={deleteUser} />
      </div>
    </>
  );
}

export default App;

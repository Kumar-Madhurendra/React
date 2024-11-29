// import './App.css';
// import User from './components/User';
// const user =[
//   {id:1,firstName:"Harshit", lastName:"Vashist"},
//   {id:1,firstName:"Kumar", lastName:"Madhurendra"},
//   {id:1,firstName:"Roushan", lastName:"Ojha"}
// ]


// function App(){
//   return (
//     <div className="App">
//       <User firstName={user[0].firstName} lastName={user[0].lastName} />
//       <User firstName={user[1].firstName} lastName={user[1].lastName} />
//       <User firstName={user[2].firstName} lastName={user[2].lastName} />
//     </div>
//   );
// }

// export default App;

// -------------------------------------------------------------

import "./App.css";
import User from "./components/User";
const users = [
  { id: 1, firstName: "Harshit", lastName: "Vashist" },
  { id: 1, firstName: "Kumar", lastName: "Madhurendra" },
  { id: 1, firstName: "Roushan", lastName: "Ojha" },
];



      {/* // ---------------------using  map function---------------------- */}


function App() {
  return (
    <div className="App">
      {/* // ---------------------using RETURN---------------------- */}

      {/* {users.map((user) =>{
        return(
      <User firstName={user.firstName} lastName={user.lastName} />
      );
    })} */}

      {/* // ---------------------WITHOUT using RETURN---------------------- */}

      {/* {users.map((user)=>( <User firstName={user.firstName} lastName={user.lastName} />     */}
      {/* ))} */}

      {/* // ---------------------USING spread operator---------------------- */}
      {users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
}

export default App;

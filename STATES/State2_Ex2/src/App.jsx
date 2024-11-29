import { useState } from 'react';
import './App.css';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([
    {id:1,firstName:"Kumar",lastName:"Madhurendra",age:23},
    {id:2,firstName:"Roushan",lastName:"Kumar",age:25},
    {id:3,firstName:"Shanu",lastName:"Kumar",age:27},
    {id:4,firstName:"Yudwik",lastName:"Kumar",age:29},
  ]);

  function increaseAge(id){
    // console.log(id);
    // console.log("Increase Age called");


    // const newState=[];
    // for(let user of users){
    //   if(user.id===id){
    //     newState.push({...user,age:user.age +1})
    //   }else{
    //     newState.push(user);
    //   }
    //   setUsers(newState);
    // }


    // #developer choice of syntax 
    // map,filter,reduce,find
    setUsers((prevState)=>{
      return prevState.map((users)=>{
        if(users.id===id){
          return{ ...users,age:users.age+1};
        }else{
          return users;
        }
      });
    });
  }


  return(
    <>
      <div>
         <Users user={users} increaseAge={increaseAge}/>
      </div>
       
    </>
  );
}

export default App;

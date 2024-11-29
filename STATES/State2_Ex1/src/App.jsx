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

  return(
    <>
      <div>
         <Users user={users}/>
      </div>
       
    </>
  );
}

export default App;
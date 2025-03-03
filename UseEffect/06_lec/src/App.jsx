import {useState} from 'react';
import FetchDataExample from "./component/FetchDataExample";
const URL="https://jsonplaceholder.typicode.com/users";

function App() {
  const[showComponent,setShowComponent]=useState(true);
  return (
    <>
    <label htmlFor="showComponent">Show Component</label>
    <input type="checkbox" name="showComponent" id="showComponent" checked={showComponent}
    onChange={()=>setShowComponent(!showComponent)}/>
    
    { showComponent && <FetchDataExample/>}
  
  
  </>
  );
}

export default App

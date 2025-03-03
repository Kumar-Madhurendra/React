import './App.css';
import {useState} from 'react';
import Userform from "./component/Userform";
 
function App() {
  const[showComponent,setShowComponent]=useState(true);
  return (
    <div>
    <label htmlFor="showComponent">show Component</label>
      <input 
      type="checkbox"
      name="showComponent"
      id="showComponent"
      checked={showComponent}
      onChange={()=>setShowComponent(!showComponent)}
      />
      {showComponent && <Userform/> }
    </div>
  )
}

export default App;

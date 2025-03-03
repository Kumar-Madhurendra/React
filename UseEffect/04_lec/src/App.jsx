import { useState } from 'react';
import CleanUpFunctionDemo from "./CleanUpFunctionDemo";
//cleanup function

//useEffect : side Effects
// document.addEventListener (useEffect)
function App() {
  const [showComponent,setShowComponent] = useState(true);
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
      {showComponent && <CleanUpFunctionDemo/> }
    </div>
  // 
);
}

export default App;

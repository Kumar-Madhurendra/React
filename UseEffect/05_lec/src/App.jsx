import { useState } from 'react';
import './App.css';
import MouseMoveEvent from './MouseMoveEvent';
function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div>
      <label htmlFor="showComponent">Show Component</label> 
      <input 
      type="checkbox"
      name="showComponent"
      id="showComponent"
      checked={showComponent}
      onChange={()=>setShowComponent(!showComponent)}
      />
      {showComponent && <MouseMoveEvent/>}
    </div>
  );
}

export default App;

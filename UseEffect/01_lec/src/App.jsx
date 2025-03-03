import { useState } from 'react';
import './App.css';
import ExampleUseEffect from "./ExampleUseEffect";

function App() {
  const [count, setCount] = useState(0)

  return (
   <ExampleUseEffect/>
  )
}

export default App

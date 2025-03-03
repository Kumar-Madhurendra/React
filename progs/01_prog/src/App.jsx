import { useState } from 'react'

 
function App() {
  const [red, setRed] = useState(11);
  const [blue, setBlue] = useState(20);
  const [green, setGreen] = useState(22);
  
  const handleRandomMode=()=>{
    setRed(Math.floor(Math.random() * 100));
    setGreen(Math.floor(Math.random() * 100));
    setBlue(Math.floor(Math.random() * 100));
  }
  const handleDarkMode=()=>{
      setRed(0)
      setGreen(0)
      setBlue(0)
  }
  return (
     <div style={{backgroundColor:`rgb(${red} ,${blue},${green}`,
     padding:"100vh"}}>
      
      <button onClick={handleRandomMode}>Random Mode</button>
      <button onClick={handleDarkMode}>Dark Mode</button>
      



     </div>
  )
}

export default App;

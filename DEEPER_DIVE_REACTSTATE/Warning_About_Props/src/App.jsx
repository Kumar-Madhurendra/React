import { useState } from 'react'
import Count from './components/Counter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Count/>
      </div>
       
    </>
  )
}

export default App

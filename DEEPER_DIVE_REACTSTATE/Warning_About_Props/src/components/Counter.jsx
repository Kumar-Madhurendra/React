import {useState} from 'react';
import Show from './Showcountvalue';

function Counter() {
    const[count ,setCount]=useState(0);

    function handleIncrease(){
        setCount((prevcount)=>prevcount+1);
    }
  return (
    <div>
        <h1>Count : <Show count={count}/></h1>
        <button onClick={handleIncrease}>Increase Count</button>
    </div>
  )
}

export default Counter;
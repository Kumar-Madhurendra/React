import {useRef,useEffect} from 'react';

function Userform() {
  const usernameRef=useRef();
  useEffect(()=>{
    usernameRef.current.focus();
  },[]);
  return (
    <form> 
      <input 
      type="text"
      name=""
      id=""
      placeholder="username"
      ref={usernameRef}
      />
    </form>
  );
}

export default Userform
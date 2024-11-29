function Userdetail({id,firstName,lastName,age,increaseAge , deleteUser}) {
    return(
      <div className="user">
        
           <p>FirstName: {firstName}</p>
           <p>LastName: { lastName}</p>
           <p>Age: { age}</p>
           <button onClick={()=> {increaseAge(id);}}>Increase Age</button>
           <button onClick={()=>{deleteUser(id)}}>Delete</button>
          
      </div>
    )
  }
  
  export default Userdetail;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
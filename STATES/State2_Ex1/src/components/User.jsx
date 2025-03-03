function Userdetail({firstName,lastName,age}) {
  return(
    <div className="user">
         <p>FirstName: {firstName}</p>
         <p>LastName: { lastName}</p>
         <p>Age: { age}</p>
        
    </div>
  )
}
export default Userdetail;
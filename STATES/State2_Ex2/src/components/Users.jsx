import User from "./User";
function Users({ user,increaseAge }) {
  // user whi props_name hai jo app k div me pss h
  return (
    <div>
       
      {user.map((user) => (
        <User  {...user} key={user.id} increaseAge={increaseAge} />
            
        ///pass as a props
      ))}
    </div>
  );
}

export default Users;





// #extra code no need 

/*{
   { user.map((users)=>{
            return(
                <div>
                    <p>firstName: {users.firstName}</p>
                </div>
            );
        })} */
// }

{
  /* #MOSTLY USED SYNTAX */
}
{
  /* {user.map(uuser=>(     // uuser is a temport name to iterates each element as a list using "MAP" on array
            <div>
                <p>firstName: {uuser.firstName}</p>
            </div>
        ))} */
}

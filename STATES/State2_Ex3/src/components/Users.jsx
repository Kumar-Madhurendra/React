import User from "./User";
function Users({ user,increaseAge ,deleteUser}) {
  // user whi props_name hai jo app k div me pss h
  return (
    <div>

      {user.map((user) => (
        <User  {...user} key={user.id} increaseAge={increaseAge} deleteUser={deleteUser}  />
            
       ))}
    </div>
  );
}

export default Users;


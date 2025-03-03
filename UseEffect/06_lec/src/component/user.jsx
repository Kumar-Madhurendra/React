import React from 'react';

function User({id,name,username,email,phone,address,company,website}) {
  return (
    <div style={{padding:"1rem"
                ,margin:"1rem",
                backgroundColor:'green',
            
    }}>
        <h1>id: {id}</h1> 
        <h1>name: { name}</h1> 
        <h1>username: {username}</h1>
        <h1>email: {email}</h1> 
        <h1>phone: {phone}</h1> 
        <h1>address: {address.city}</h1> 
        <h1>company: {company.name}</h1> 
        <h1>website: {website}</h1> 
      


        
        
    </div>
  );
}

export default User
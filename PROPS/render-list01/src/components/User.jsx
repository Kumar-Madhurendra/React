// -----------------------------Handle multiple user but not infinite--------------------
import React from 'react';

function User({ firstName, lastName }) {
 
  const fontStyle = {
     fontFamily: "sans-serif"
  };

  return(
    <div>
      <h1 style={fontStyle}> {firstName} {lastName}</h1>
    </div>
  );
}

export default User;






















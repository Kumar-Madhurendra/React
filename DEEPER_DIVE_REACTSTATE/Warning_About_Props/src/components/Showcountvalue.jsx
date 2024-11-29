import React from 'react';
// function Showcountvalue(props) {
//     // const {count}=props;
//     const count=props.count;

//   return <span>{count}</span>
// }


// =====================PROPS ARE IMMUTABLE BUT VARIABLE are not immutable ,we can changed its value  ....LEKIN AISA HMM KRTE NHI H ================

function Showcountvalue({count}) {
    // count=1000;
  return <span>{count}</span>
}

export default Showcountvalue;
function Greeting(props){
    return(
        <>
        {props.children}
        </>
    )
}
export default Greeting;


// --------------------------------------------------------------------

// function Greeting({children,firstName, lastName}){
//     return(
//         <>
//         {children}
//         <div>
//             <h3>i am {firstName} {lastName}</h3>
//         </div>
//         </>
//     )
// }
// export default Greeting;
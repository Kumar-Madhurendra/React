// const element = document.getElementById("root");
// const con=React.createElement("h1",{className:"heading"},"TU CHL TERE WAJOOD KI BHI SMAY KO TLSH H !!");   ///by react library
// ReactDOM.createRoot(element).render(con);  /// by reactDOM library

// -----------------------------------------------------------------------

// #by function
// const element = document.getElementById("root");
// function Hello(){
//   return React.createElement("h1",{className:"heading"},"hello world !!");
// }
// ReactDOM.createRoot(element).render(Hello());


// -----------------------------------------------------------------------


// #byjsx jo  --> mtlb phlee [[react.createElement()]] use kr rhea the ab wo sb nhi krna padega ab bss < > iske andr hi likhna padega wo bhi end me "/" likh kr . 

const element = document.getElementById("root");
function Hello(){
  return <h1>hello world !</h1>
}
ReactDOM.createRoot(element).render(<Hello/> ) ////last me ye "/" add krna mat bhulna 
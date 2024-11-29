// -------------------------------------------------------
//  In javascript element are seen as object.

// console.log("hello world!");
// const rootElement = document.getElementById("root"); ///root element is just a variable
// console.log(rootElement);
// --------------------- # (type , properties[href, img , color] , children)-----------------------------

// const element = React.createElement("h1", null, "Hello world");

// console.log(element);     //react element only is a object
// ReactDOM.createRoot(rootElement).render(element);  //render method takes input as a element

// ---------------------#by function creating react----------------------------------
// function HelloWorld() {
//   return React.createElement("h1", { className: "heading" }, "Hello world ");
// }
// ReactDOM.createRoot(rootElement).render(HelloWorld());

// --------babel cdn - used to convert jsx code into react  like <h1>hello world </h1>  isko React.createElement() me convert krta h
// ----------- jb aap jsx use kr rhea hai toh aapka jo bhi component(function) hoga uska 1st letter capital hoga ---------------

// function HelloWorld() {
//     return (<h1>hellow</h1>);
//   }
// //   console.log(Helloworld());
//   ReactDOM.createRoot(rootElement).render(<HelloWorld />);

// --------------------comparing react library v/s JSX-----------------------------------

// const rootElement = document.getElementById("root");

// // type, props, children
// ------------------without jsx-------------------------------------

// // function HelloWorld() {
// //     return React.createElement("h1", { className: "heading" }, "Hello World");
// // }

// --------------------with jsx-----------------------------------

// function HelloWorld() {
//     return <h1 className="heading">Hello World</h1>;
// }

// ReactDOM.createRoot(rootElement).render(<HelloWorld />);

// // h1, h2, h3, h4, div, p , article, main

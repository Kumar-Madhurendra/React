/////////////////////WE MOSTLY USE CONST TO CREATE OBJECT////////////////////
///////DON'T FORGOT TO GIVE EQUALS TO (=) AFTER THE OBJECT NAME  ////////////
////////////////END YOUR OBJECT'S CURLY BRACES WITH SEMICOLONS(;)//////////////

/*
const employee = {
    name:"kumarmadhurendra",
    exp:12,
    intern:"google"
};
console.log(employee.name);
console.log(employee.exp);
console.log(employee.intern);

*/

///////////////////////CREATING FUNCTION INSIDE THE OBJECT //////////////////////////////////////////
///////////////////////THERE WE USE this.name TO CALL THE VALUE OF OUR OBJECT'S KEY//////////////////

/*

const person ={
    name:"roshan",
    age:19,
    greet: function (){
        console.log("hello, there i am "+this.name+" and my age is "+person.age);
    }
};
person.greet();

*/

/////////////////////////USING ARROW FUNCTION//////////////
////////////////////////ARROW FUNCTION CAPTURES INPUT FROM OUTER SCOPE/////////////////
// const name = 'Alice';  // Outer scope variable

// const obj = {
//     name: 'Bob', 
//     age:12,
//      // Add a name property to obj for testing
//     greet: function (){
//         console.log("hello, there i am "+this.name+" and my age is "+this.age);
//     },
//     arrowFunction: () => {
//         console.log(name);  // Arrow function captures `name` from outer scope
//     }
// };

// obj.greet();  // Output: Bob (because 'obj' now has a 'name' property)
// obj.arrowFunction();  // Output: Alice (because `name` is defined in the outer scope)




//////////////////UPDATING any Element's VALUE OF OBJECT////////////////

const person ={
    id:1,
    firstName:"roushan",
    lastName:"ojha",
    email:"kumarmadhurendra@gmail.com",
    phone:"00990099",
    age:23,

};

const updatePerson={...person,age:29,};
console.log(updatePerson);
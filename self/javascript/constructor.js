////////////////////CONSTRUCTOR - IT'S A REGULAR FUNTION .////////////////////
////////////BY CONVENTION THE FIRST LETTER OF NAME OF THE FUNCTION IS ALWAYS A CAPITALISED/////////

// function Person(name, age) {
//     this.name = name;  // Set the 'name' property
//     this.age = age;    // Set the 'age' property
// }

// // Adding a method to the Person's prototype
// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// // Creating an instance of the Person using the constructor function
// const person1 = new Person('John', 30);
// person1.greet();  // Output: Hello, my name is John and I am 30 years old.
const arr = [1,2,3,4];
const arr1=[...arr];
arr1[4]=0;
console.log(arr1);
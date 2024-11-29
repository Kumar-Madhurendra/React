/*
Array.from();
Array.of();
Array.copyWithin();
Array.find();
Array.findIndex();
Array.enteries();
Array.kays();
Array.values();
Array.fill();
*/




// Array.from
// console.log(Array.from("hello")
//////////////////RETURN FUNCTION IN ARROW FUNCTION IS IMPLICIT////////////////

let arr=[6,5,7,4];
modifiedarr = Array.from(arr,arr=>arr*5);
// modifiedarr=Array.from(arr,function(arr){
//     return arr*5;
// });
console.log(modifiedarr);

///////////////-------------/////////////////
//Arrow.of
// console.log(Array.of(6,5,"hello","hei","there",1));

// let a=Array.of({id:1,name:'roushan'},{id:12,name:'shanu'});
// console.log(a);

////////////////--------------///////////////////

//Arroe.copyWithin/////////
// let arr=[7,3,4,2,5,43,22,1,3];
// console.log(arr.copyWithin(3));

// console.log(arr.copyWithin(3,4));  ///////(where to start copy,from which index start to copy)
// let arr=[7,3,4,2,5,43,22,1,3];
// console.log(arr.copyWithin(3,1,4));   ///////(where to start copy,from which index start to copy, end copying) 



////////////////----satify the condition at first ----------///////////////////

//Array.find()
// let arr = [5, 12, 8, 130, 44];
// let found = arr.find(element => element > 10); 

// satifiedeven=arr.find(function(arr){
//     return arr%2==0;
// });
// satifiedeven=arr.findIndex(function(arr){
//     return arr%2==0;
// });
// console.log(satifiedeven);

// console.log(...arr.entries());

// console.log(...arr.entries());
// console.log(...arr.keys());
// console.log(...arr.values());
// console.log(...arr.fill(6,1,3));     //////////(kya copy krna h ,kha se start krna h , jha tk krna h usse ek extra index dena h )










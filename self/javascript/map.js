const numbers= [2,3,4,5];
console.log(numbers.map(Math.sqrt));



const array1= [1,4,9,16];
const map1 = array1.map(x => x*2);
console.log(map1);

const persons = [
    {name: 'John', lastname:"dalton"},
    {name: 'Jane', lastname:"Doe"},
    {name: 'megha', lastname:"Don"},


];

function getFullname(item){
    return [item.name,item.lastname].join(" ");

}
console.log(persons.map(getFullname));
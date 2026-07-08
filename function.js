/*
//normal function
function greet(){
    console.log('hello')
}

greet()


// arrow function
const greet=(()=>console.log("hello"))
greet()

//function with 1 parameter
function greet(name){
    console.log(`Name: ${name}`)
}
greet("ram")

//function with multiple parameter
function greet(name,fname){
    console.log(`Name: ${name} ${fname}`)
}
greet("ram","shyam")

//rest parameter
function greet(...array){
    console.log(`Name: ${array}`)
}

//spread operator
const array=[1,2,3,4]
const array1=[4,5,6,7]
const result = [...array, ...array1];
greet(result)

//callback function
function greet(callback){
    console.log("hello");
    callback();
}
function bye(){
    console.log("how are you");
}
greet(bye);
*/

//map function
const students = [
    { name: "Ram", age: 20 },
    { name: "Hari", age: 21 }
];

const names = students.map(student => student.name);

console.log(names);

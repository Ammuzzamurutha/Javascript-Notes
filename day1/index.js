console.log(`Hello world!`);
//we can use double,single or backticks for strings
window.alert(`this is an alert!`);
//this is a comment
/* this is a multi line comment*/
document.getElementById(`myh1`).textContent = `Welcome to my website`;
document.getElementById(`myp`).textContent = `This is a paragraph`; 
//variables : a container that stores values
//2 steps for creating a variable :
 //1. declare the variable 
//2. assign a value to the variable
//declaring a variable
let myVariable;
//assigning a value to the variable
myVariable = `Hello`;
//we can also declare and assign a value to a variable in one step
let myVariable2 = `Hello again`;
console.log(myVariable);
console.log(myVariable2);
let age =21;
let price=10.2;
console.log(`you are ${age} years old`);
console.log(`the price is ${price} dollars`);

//strings
let firstname =`amrutha`;
console.log(typeof firstname);
console.log(`my name is ${firstname}`);
//boolean
let online =false;
console.log(typeof online);
console.log(`are you online? ${online}`);

let fullname=`amrutha varshini`;
let age2 =21;
let student=false;

document.getElementById(`p1`).textContent=`my name is ${fullname}`;
document.getElementById(`p2`).textContent=`my age is ${age2}`;
document.getElementById(`p3`).textContent=`am i a student? ${student}`;
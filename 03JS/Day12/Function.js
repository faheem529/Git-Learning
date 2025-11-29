// function greet(){
//     console.log("Hello Coder Armt");
//     console.log("Main Badhia hun");
//     console.log("Aur kya haal chal hai");

// }
// greet();

// function sum(number1, number2){
//     console.log(number1+number2);
// };

// functon call:by passing arguments
// sum(3,7);
// sum(90,23);
// sum(70,30);

//Multiplication
// function multy(number1, number2){
//     console.log(number1*number2);
// };
// multy(3,5);

// function multy(num1, num2){
//     return num1*num2;
// }
// let result = multy(4,6);
// console.log(result);

// const fun = function(){
//     console.log("Hello Coder Army");
//     console.log("Main Badhiya Hun");
//     return "Money";
//     // console.log("Aur sab kaisa chal raha hai") //ye return nahi hoga
// }

// console.log(fun());

//Arrow fucntion
// const sum = (num1, num2)=>{
//     return num1+num2;
// }

// const sum = (num1,num2) => num1+num2;  
// console.log(sum(4,5));

// const cube = number => number*number*number;
// console.log(cube(8));

//Spread operator or rest operator
// let arr = [2,3,4,5];
// let arr2 = [...arr];
// const sum = function(...number){
//     console.log(number);
// }
// sum(10,25,34);
// sum(2,3,4);
// sum(4,6,22,20,25);
// sum(45,61,23);

// let obj = {
//     name:"Faheem",
//     age:21,
//     amount:330,
// }
// function fun ({name, amount}){
//     console.log(name, amount);
// }
// fun(obj);

// How to change the prototype

// let obj1 = {
//     a:1,
//     b:2,
// }

// let obj2 = {
//     c:1,
//     d:2,
// }

// obj2.__proto__=obj1;
// console.log(obj2.__proto__);

// obj2 = Object.create(obj1);
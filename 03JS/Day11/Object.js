// Object Part 2
// let obj1 = {
//     a:1,
//     b:2,
// }
// let obj2 = obj1;

// shallow copy
// obj2.a = 10;
// console.log(obj2,obj1);

// deep copy
// let obj3 = structuredClone(obj1);
// obj1.a = 30;
// console.log(obj3, obj1);

// Nested object
// const user = {
//     name:"Rohit",
//     balance:420,
//     adress: {
//         pincode:246199,
//         city:"Kotdwar",
//     }
// }
// console.log(user.adress.pincode);

//Destructoring of an object
// let obj = {
//     name:"Rohit",
//     moaney:420,
//     balance:30,
//     age:20
// };
// const {name,balance} = obj;
// console.log(name,balance);

// const {name:Full_name, balance:amount, age:Umar} = obj;
// console.log(Full_name, amount, Umar);

// let obj = {
//     name:"Rohit",
//     money:430,
//     balance:30,
//     age:25,
//     aadhar:"jsdsbdhjb",

// };
// const {name, age, ...obj1} = obj;
// console.log(obj1);

// const arr=[3,2,1,5,10];
// const [first,second] = arr;
// const [first,second, ,third] = arr;
// const [first,second, ...third] = arr;
// console.log(third);

// let obj = {
//     name:"Rohit",
//     age:20,
//     adress:{
//         pincode:246199,
//         city:"Kotdwar",
//         state:"Uk",
//     }
// };
// const {name} = obj;
// console.log(name);

// const {adress:{pincode,city}} = obj;
// console.log(pincode, city);

// let obj = {
//     name:"Rohit",
//     age:20,
//     arr:[90,40,60,80],
//     adress:{
//         pincode:246199,
//         city:"Kotdwar",
//         state:"Uk"
//     }
// };

// const {arr:[first]} = obj;
// console.log(first);

// const {arr:arr2} = obj;
// console.log(arr2);

// let user = {
//     name:"Rohit",
//     amount:420,
//     greet:function(){
//         console.log("Hello Coder Army");
//     },
//     meet:function(){
//         reuturn:20;
//     }
// }

// user.greet();
// console.log(user.greet()); //return undefined;


 
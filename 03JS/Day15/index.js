// for of loop in js ..
// const arr = [10,20,11,18,13];
// for (let value of arr){
//     console.log(value);
// }

// let str = "Rohit is Good Boy";
// for (let value of str)
// {
//     console.log(value);
// }

// don't use for loop in object.....!
// const obj = {
//     2:5,
//     1:3,
//     name:"Faheem",
//     age:21,
//     gender:"male"
// };
// for (let value of obj){
//     console.log(value);
// }

// for (let value of Object.keys(obj))
//     console.log(value, obj[value]);

// forEach

// let arr = [10,20,30,40,50];
// arr.forEach((num) => console.log(num));
// arr.forEach((num, index) => console.log(num, index));
// arr.forEach((num, index,a) => {
//     a[index] = num*2;
// });
// arr.forEach((num, index, arr) => console.log(num, index, arr));

// const greet = function(num){
//     console.log(num);
// }

// Array.forEach(function(num){
//     console.log(num);
// });

// filter
// let arr = [10,22,33,41,50];
// const result = arr.filter((num)=>{
//     return num%2==0; //Return true false...
// })
// console.log(result);

// const students = [
//     {name:"Rohan", age:20, marks:70},
//     {name:"Sohan", age:21, marks:40},
//     {name:"Mohit", age:22, marks:90},
//     {name:"Rakesh", age:23, marks:30},
//     {name:"Suresh", age:24, marks:20},
// ]
// const result = students.filter((obj) => {
//     return obj.marks>50;
// });
// console.log(result);

// map

// const arr = [1,2,4,5]
// const result = arr.map((num) => {
//     return num*num
// });
// console.log(result);

// const arr = [1,2,4,5]
// const result = arr.map((num, index) => {
//     return num*index
// });
// console.log(result);

// chaining for the map
const arr = [1,2,3,4,5,6];
const result = arr.filter((num) => num%2==0).map((num) => num*num)
console.log(result);
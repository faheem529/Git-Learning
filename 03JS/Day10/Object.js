// How to create Object  
// const obj = {
//     name:"rohit",
//     account_balance:420,
//     gender:"Male",
//     age:30,
//     "account number":234512,
//     undefined:30,
//     null:"Mohan"
// };

// console.log(obj);
// console.log(obj.name);
// console.log(obj.gender);
// console.log(obj.age);
// console.log(obj['0']);
// console.log(obj[1]);
// console.log(obj[2]);


// const inst = {
//     0:20,
//     1:50,
//     2:70,
//     insta_id:"rohit_negi09",
//     password:"Bhaiyaji09"
// };

// console.log(inst);
// console.log(typeof inst);
// console.log(inst.insta_id);

// const arr = [20,50,70];
// console.log(arr[0],inst[0]);
// console.log(arr[1],inst[1]);
// console.log(arr[2],inst[2]);

// Second Method to create object
const person = new Object();
console.log(person);

//Property add

person.name = "Rohit",
person.age = 30,
person.gender = "Male",
console.log(person);

// delete
delete person.age;
console.log(person);

//Modify
person.name="Mohit";
console.log(person);

// Third Method
class people {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}
let per1 = new people("Rohit",20,"Male");
console.log(per1);
let per2 = new people("Nafisha",16,"Female");
console.log(per2);
let per3 = new people("Saba",24,"Female");
console.log(per3);

let obj = {
    name:"rohit",
    age:30,
    account_balance:420,
    gender:"male",
};

// const arr = Object.keys(obj);
// console.log(arr);

//key values.
const arr = Object.values(obj);
console.log(arr);

// key:value
const arr2 = Object.entries(obj);
console.log(arr2);

//assign use case
const obj1 = {a:1,b:2,c:3};
const obj2 = {d:4,e:5,f:6};
const obj4 = {g:7,h:8,i:9};
const obj3 = Object.assign(obj1,obj2,obj4);
console.log(obj3);

const obj5 = {...obj1,...obj2,...obj4};
console.log(obj5);




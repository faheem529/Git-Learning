// let obj = {};

//  obj.name = "Rohit";
// key value Writable, enumerable, configurable.
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

// writable: false,value ko kya mein change kar sakte hain
// obj.name = "Mohit"
// configurable = true

// let obj = {};
// Object.defineProperty(obj, 'name',{
//     value:"Rohit",
//     writable:true,
//     configurable:true,
// })
// console.log(obj);

// Object.defineProperty(obj, 'name',{
//     writable:false,
// })
// obj.name = "mohit";
// console.log(obj);

// const obj1 = {
//     name:"Rohit",
//     age:23,
//     account_number:30001
// };

// Object.defineProperty(obj1, 'account_balance', {
//     writable:false
// })

// obj1.account_number = 20001;
// console.log(obj1.account_number);

// const customer = {
//     name:"Faheem",
//     age:23,
//     account_number:123,
//     balance:2000,
// }

// // name, account_number, change nahi honi chahiye
// Object.defineProperty(customer, "name",{
//     writable:false,
// })
// customer.name = "Rohit";
// customer.account_number = 1000;
// console.log(customer);

// const customer = {
//     name:"faheem",
//     age:21,
//     account_number:123,
//     balance:2000
// }

// let customer2 = Object.create(customer);
// customer2.city = "Haridwar";
// customer2.place = "Delhi";

// Object.defineProperty(customer, "name",{
//     enumerable:false,
// })

// for (let key in customer)
// console.log(key);

// console.log(Object.getOwnPropertyDescriptors(customer, 'name'));
// console.log(Object.getOwnPropertyDescriptors(Object.prototype, toString));

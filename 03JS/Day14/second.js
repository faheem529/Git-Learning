// Object.defineProperty(Object.prototype, 'toString',{
//     enumerable:true,
// })
// for (let key in customer)
//     console.log(key);

// for in loop:Isko array ke sath nhi lete.
const arr = [10,20,40,12,30];
for (let key in arr){
    console.log(key);
    console.log(key, arr[key]);
}

// const arr = [10,20,30,40,12,30];
// arr.name = "Faheem";
// arr.age = 21;
// for (let index=0; index<arr.lenggth; index++)
//     console.log(index,arr[index]);

// define property
// define properties
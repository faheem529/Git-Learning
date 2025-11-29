// useCallback

// function fetchuser(){
//     console.log("Fetching the user details....");
//     setTimeout(()=>{
//         console.log("Data fetched successfully");
//         const obj = {
//             name: "Faheem",
//             age: 24,
//             gender:"male",
//             city:"Bangalore"
//         }
//         // Data fetched from backend
//         // useCallback(name);
//         // meet(name);
//         // greet(name);
//         greet(obj);
//     }, 2000);
// }

// function fetchuser1(){
//     console.log("Fetching the user details....");
//     setTimeout(()=>{
//         console.log("Data fetched successfully");
//         const obj = {
//             name: "Faheem",
//             age: 24,
//             gender:"male",
//             city:"Bangalore"
//         }
//         // Data fetched from backend
//         // useCallback(name);
//         // meet(name);
//         // greet(name);
//         printAge(obj);
//     }, 2000);
// }

function greet(obj){
    console.log(`Hello ${obj.name}`);
}

// fetchuser(greet);
// fetchuser1();

function meet(obj){
    console.log(`Hello ${obj.name}, I will meet you soon`);
}

function edit(obj){
    console.log(`Edit ${obj.name}, of the user`);
}

function printAge(obj){
    console.log(`Age of the user is ${obj.age}`);
}

// fetchuser(greet);
// fetchuser(meet);
// fetchuser(greet);
// fetchuser(edit);


// User data fetch: 
// {
//    name:"Rohit",
//    age:24,
//    city:"Delhi",
// }
// 1: greet
// 2: meet
// 3: edit
// 4: age

// function fetchdata(useCallback){
//     console.log("Fetched info of user");

//     setTimeout(()=>{
//         console.log("User detail fetched successfully");
//         const obj = {
//             name: "Rohit",
//             age: 24,
//             city: "Delhi",
//         }
//         useCallback(obj);
//     },2000)
// }

// fetchdata(greet);
// fetchdata(meet);
// fetchdata(edit);

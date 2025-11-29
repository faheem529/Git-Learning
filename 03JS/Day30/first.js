// Callbackhell

// async task
// weather


const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=bc1a0f5efc60480ba61140032251311&q=London&aqi=yes`)

// const pro2 = Promises.then((response)=>{
//     // const pro2 = response.json();

//     // pro2.then((data)=>{
//     //     console.log(data);
//     // })
//     return response.json();
// })

// Promises
// .then(response=>response.json())
// .then(data=>console.log(data))


fetch(`http://api.weatherapi.com/v1/current.json?key=bc1a0f5efc60480ba61140032251311&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data.current.temp_c))
.catch((error)=>console.log(error));











// console.log("Promises");

// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


// pending resolve reject
 

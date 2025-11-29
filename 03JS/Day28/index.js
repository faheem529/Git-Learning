// call back hell

// fetchuser(greet)

// Domino's pizza order kar rahe ho: 

Callback = ()=>{
    preparingOrder();
}

function placeOrder(Callback){
    console.log("Talking with Domino's");

    setTimeout(()=>{
        console.log("Order placed Successfully");
        Callback();
    },2000)

}

function preparingOrder(Callback){
    console.log("Pizza preparation Started");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        Callback();
    },5000)
}

function pickupOrder(){
    console.log("Reaching restaurant for picking order");

    setTimeout(()=>{
        console.log("Order Picked up by Delivery Boy");
        Callback();
    },3000)
}

function deliverOrder(Callback){
    console.log("Delivery boy is on the way");

    setTimeout(()=>{
        console.log("Order delivered successfully");
    },5000)
}

// function ratingOrder(){

// }

// deliverOrder(preparingOrder);
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
});

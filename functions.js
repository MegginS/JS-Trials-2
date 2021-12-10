'use strict';

function isHometown(town){
    
    return town === "San Francisco"
}

console.log(isHometown("San Francisco"));

function getFullName (firstName, lastName){
    return `${firstName} ${lastName}`
}

console.log(getFullName("Meg", "Reed"));

// Define your function here

// 3. calculateTotal

// Define your function here

function calculateTotal(basePrice, state, tax=0.05){
    const subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === "CA"){
        fee = 0.03 * subtotal;
    } else if (state === "PA"){
        fee = 2;
    } else if (state === "MA"){
        if (basePrice <= 100){
            fee = 1;
        } else {
            fee = 3;
        }
    }
    return subtotal + fee;
}

console.log(calculateTotal(3, "PA"));
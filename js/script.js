/* 
    JS
*/

const userKm = document.querySelector('[name= "km"]');

const userKmConverted = parseInt (userKm)

console.log ('userKmconverted', typeof userKmConverted)

// --------------------------


const userAge = document.getElementById('ageInput').value;
console.log (userAge.value)


const userAgeConverted = parseInt (userAge)

console.log ('userAgeconverted', typeof userAgeConverted)

// --------------------------

let discount = 0


const ticketPrice = (userKmConverted * 0.21) - discount

if (userAgeConverted == 1){

    discount = ((ticketPrice * 20 ) / 100) 

} else if (userAgeConverted == 2){
    
    discount = 0

} else {

    discount = ((ticketPrice * 40 ) / 100)

    console.log ((ticketPrice * 40 ) / 100)
}

console.log('ticket price', ticketPrice)


// --------------------------



const myButton = document.getElementById('click-button');

myButton.addEventListener ('click',
    function() {
        document.getElementById('userFinalPrice').innerHTML = ticketPrice + '€'
    }
)









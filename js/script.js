/* 
    JS
*/

const myButton = document.getElementById('click-button')

myButton.addEventListener('click',
    function(){

        const distance = parseInt(document.getElementById('kmInput').value);
        console.log('km', distance, typeof distance)

        const age = parseInt(document.getElementById('ageInput').value);
        console.log('anni', age, typeof age)

        const ticketPrice = (distance * 0.21)
        console.log('prezzo', ticketPrice, typeof ticketPrice)

        let discount = 0

        if (age == 1){
            discount = (ticketPrice * 20) / 100;
        }
        else if (age == 3){
            discount = (ticketPrice * 40) / 100;
        }
       
        const finalPrice = ticketPrice - discount

        document.getElementById('userFinalPrice').innerHTML = finalPrice +'€'
    }
)


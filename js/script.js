/*
 *  Il computer deve generare 16 numeri casuali tra 1 e 100.
 *  I numeri non possono essere duplicati.
 *  In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
 *  sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
 *  Se il numero è presente nella lista dei numeri generati, la partita termina, 
 *  altrimenti si continua chiedendo all’utente un altro numero.  La partita termina quando il giocatore 
 *  inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
 *  Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
 *  l’utente ha inserito un numero consentito.
 */


let bombs = [];
let playedNumbers = [];

function randomNumber (min, max) {
    return Math.floor(Math.random() * (min - max + 1) + max);
    }

// Creating 16 random numbers.
while(bombs.length < 16){

    let singleBomb = randomNumber (1, 100); 
    
    if (!bombs.includes(singleBomb) ){
    bombs.push (singleBomb);
    }
    // console.log(bombs);
}

// Asking the user n times the numbers he wants to play. 
while(playedNumbers.length < (100 - 15)) {

    let userNumber = parseInt( prompt("Insert a number from 1 to 100.") );

    if (playedNumbers.length == (100 - 16) ) {
        alert ("You won! Press cmd + r to restart the game.");
        break;
    } else if (playedNumbers.includes(userNumber) ){
        userNumber = parseInt( prompt("Too easy this way... Please insert a different number each time.") );
    } else if (isNaN(userNumber)){
        userNumber = parseInt( prompt("You can ONLY insert numbers!") );
    } else if (!userNumber > 0 && !userNumber < 100){
        userNumber = parseInt( prompt("You can ONLY insert a number from 1 to 100!") );
    }  else if ( (!bombs.includes(userNumber) ) && 
                (!playedNumbers.includes(userNumber) ) && 
                (!isNaN(userNumber) ) && 
                (userNumber > 0 && userNumber < 100)){
        playedNumbers.push (userNumber);
    } else if (bombs.includes(userNumber)){
        alert ("You lost! Press cmd + r to restart the game.");
        break;
    }
    console.log(playedNumbers);
}
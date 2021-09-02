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

function randomNumber (min, max) {
    return Math.floor(Math.random() * (min - max + 1) + max);
    }

let easy = document.getElementById("easy-btn");
let normal = document.getElementById("normal-btn");
let hard = document.getElementById("hard-btn");
    
easy.addEventListener("click", 
    function (){
    startGame ("easy")
})

normal.addEventListener("click", 
    function (){
    startGame ("normal")
})

hard.addEventListener("click", 
    function (){
    startGame ("hard")
})

// Asking the user n times the numbers he wants to play. 

function startGame(chosenLevel){
    console.log(chosenLevel)
    let bombs = [];
    let playedNumbers = [];

    let maxLimit;
    let bombNum;

    //Asking the user what level of difficulty he wants to play.
    switch (chosenLevel){
        case "easy":
            bombNum = 16;
            maxLimit = 100;
            break;
        case "normal":
            bombNum = 32;
            maxLimit = 100;
            break;
        case "hard":
            bombNum = 40;
            maxLimit = 100;
            break;
    }

    let maxNumPossibilities = (maxLimit - bombNum);


    // Creating 16 random numbers.
    while(bombs.length < bombNum){

        let singleBomb = randomNumber (1, maxLimit); 
        
        if (!bombs.includes(singleBomb) ){
            bombs.push (singleBomb);
        }
        console.log(bombs);
    }

    while(playedNumbers.length < maxNumPossibilities) {

        let userNumber = parseInt( prompt("Insert a number from 1 to 100.") );

        if (playedNumbers.length == maxNumPossibilities - 1 ) {
            alert ("YOU WON! Press cmd + r to restart the game.");
            break;
        } else if (playedNumbers.includes(userNumber) ){
            userNumber = parseInt( prompt("You have already played the number: " + userNumber + "\nPlease insert a different number each time.") );
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
            alert ("YOU LOST! Your score is:" + playedNumbers.length + "\nPress cmd + r to restart the game.");
            break;
        }
        console.log(playedNumbers);
    }
}

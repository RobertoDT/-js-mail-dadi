// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1. genero un numero random per il computer da 1 a 6
var numeroPc = Math.round(Math.random()*5)+1;
console.log("Il numero del Pc è: " + numeroPc);

//2. genero un numero random per l'utente da 1 a 6
var numeroUtente = Math.round(Math.random()*5)+1;
console.log("Il numero dell'utente è: " + numeroUtente);

//3. stabilire vincitore con punteggio più alto
if(numeroPc > numeroUtente){
  alert("Ha vinto il Computer");
} else if(numeroUtente > numeroPc) {
  alert("Ha vinto l'utente");
} else {
  alert ("I numeri sono uguali, parità!");
}

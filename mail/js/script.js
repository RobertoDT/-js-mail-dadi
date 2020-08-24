// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var elenco = [
  "pippo@pluto.com",
  "robertodeltoro93@gmail.com",
  "nonsocosascrivere@hotmail.it",
  "ciao@mai.ir",
  "pluto@pippo.com",
  "enzo.pierga@libero.eu"
];

var email = prompt("Inserisci la tua email");

// for(var i=0; i < elenco.length; i++){
//   if(email == elenco[i]){
//     alert("Sei nella lista degli invitati, Benvenuto!");
//     break;
//   }
// }
// if(email != elenco[i]){
//   alert("Mi dispiace, non sei nella lista!");
// }

var emailTrovata = false;

for(var i = 0; i < elenco.length; i++){
  if(email == elenco[i]){
    emailTrovata = true;
  }
}

if(emailTrovata == true){
  alert("Sei nella lista degli invitati, Benvenuto!");
} else {
  alert("Mi dispiace, non sei nella lista!")
}

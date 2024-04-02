// CONSEGNA
// chiedi un numeri di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero

// chiedo all'utente di inserire un numero a 4 cifre
let userNumber = prompt("inserisci un numero a 4 cifre");
console.log(userNumber);

// dichiaro una variabile di appoggio per il risultato
let sum = 0;

// calcolo la somma delle cifre inserite dall'utente tramite il ciclo for
console.log(userNumber[0]);
for (let i = 0; i < userNumber.length; i++) {
    sum += parseInt(userNumber[i]);
    // stampo il risultato
    console.log("la somma di", userNumber, "è:", sum);
}

// CONSEGNA:
// il software deve chiedere per 10 volte all'utente di inserire un numero.
// il programma stampa la somma di tutti i numeri inseriti


// creo la variabile d'appoggio che mi servirà per stampare successivamente il risultato

let result= 0;

// imposto un ciclo for che mi permette di chiedere per 10 volte consecutive, tramite prompt, un numero all'utente

for (let i = 0; i < 10; i++) {
    let userResult = parseInt(prompt("inserisci un numero"));
    console.log(userResult);
    // aggiungo il valore della variabile userNumber alla variabile result
    result += userResult;
}

// stampo la somma dei numeri inseriti dall'utente
console.log("la somma di tutti i numeri è", result);
// CONSEGNA
//  stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente;

// chiediamo all'utente di inserire un numero tramite prompt
let N = parseInt(prompt("inserisci un numero"));

// creo un ciclo for calcolo il cubo dei numeri inseriti dall'utente e stampo il risultato
for (let i = 0; i <= N; i++) {
    let result = i * i * i;
    console.log(result);
}
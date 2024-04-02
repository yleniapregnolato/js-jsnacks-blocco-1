// CONSEGNA:
// creo un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

// creo un array vuoto
const oddNumbers = [];

// chiedo all'utente di inserire per 6 volte un numero, per farlo utilizzo il ciclo for
for (let i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt("inserisci un numero:"));
    console.log(userNumber);
    // verifico se il numero è pari o dispari e nel caso sia dispari lo inserisco nell'array
    if (userNumber % 2 !== 0) {
        oddNumbers.push(userNumber);
    }
}

// stampo nell'array i numeri dispari inseriti dall'utente
console.log(oddNumbers);
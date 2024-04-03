// calcolare la somma e la media dei primi 10 numeri

// dichiaro due variabili d'appoggio che mi serviranno per scrivere il risultato della somma e della media

let sum = 0;
let avarage = 0;

// imposto il ciclo for in quanrto in questo caso ho delle interazioni precise da fare, ovvero non più di 10

for (let i = 1; i <= 10; i++) {
    sum += i;
}

// calcolo la media
avarage = sum / 10;
// stampo entrambi i risultati sulla console
console.log(sum, avarage);

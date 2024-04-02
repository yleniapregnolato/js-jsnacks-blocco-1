// CONSEGNA:
// in un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo un array con all'interno i nomi degli invitati alla festa
const guest = ["Pippo", "Pluto", "Paperino", "Minny", "Paperina"];

// chiedo all'utente il suo nome tramite prompt
const userName = prompt("Qual è il tuo nome?");

// creo una variabile flag
let invite = false;

// imposto il ciclo for per controllare se il nome dell'utente è all0interno dell'array
for (let i = 0; i < guest.length; i++) {
    if (guest [i] === userName) {
        invite = true;
        break
    }
}

// stampo il risultato su console
if (invite) {
    console.log("Complimenti, sei sulla lista degli invitati");
} else {
    console.log("Ci dispiace, non sei nella lista degli invitati");
}

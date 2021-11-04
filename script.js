// input js
const nome = prompt('Inserisci Nome');
const cognome = prompt('Inserisci Cognome');
const colore = prompt('Inserisci il tuo colore preferito');
const datiUtente = nome + cognome + colore + '21';

// output
document.getElementById('datiUtente').innerHTML = datiUtente;
console.log(datiUtente);
